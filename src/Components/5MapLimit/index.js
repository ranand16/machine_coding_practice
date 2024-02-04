Array.prototype.chop = function (size) {
    const temp = [...this];

    if (!size) {
        return temp;
    }

    const output = [];
    let i = 0;

    while (i < temp.length) {
        output.push(temp.slice(i, i + size));
        i = i + size;
    }

    return output;
};

const mapLimit = (arr, limit, fn) => {
    return new Promise((resolve, reject) => {
        let chopped = arr.chop(limit);

        const final = chopped.reduce((a, b) => {
            return a.then((val) => {
                return new Promise((resolve, reject) => {
                    const results = [];
                    let tasksCompleted = 0;
                    b.forEach((e) => {
                        fn(e, (error, value) => {
                            if (error) {
                                reject(error);
                            } else {
                                results.push(value);
                                tasksCompleted++;
                                if (tasksCompleted >= b.length) {
                                    resolve([...val, ...results]);
                                }
                            }
                        });
                    });
                });
            });
        }, Promise.resolve([]));

        final
            .then((result) => {
                resolve(result);
            })
            .catch((e) => {
                reject(e);
            });
    });
};
