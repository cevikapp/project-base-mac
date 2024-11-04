const xlsx = require("node-xlsx");

class Export {

    constructor () {

    }

    /**
     * 
     * @param {Array} titles excel tablosunun başlıkları   ["ID", "CATEGORY NAME", "IS ACTIVE"]
     * @param {Array} columns exc. tab. yaz. veril. isiml.  [id,   category_name,   is_active]
     * @param {Array} data excel tablosuna yazılacak veriler
     */

    toExcel(titles, columns, data = []) {

        let rows = [];

        /*
        [
            ["ID", "CATEGORY NAME", "IS ACTIVE" ],
            ["asd", "asd", "asd"]
        ]
        */

        rows.push(titles)

        for(let i =0; i<data.length; i++){
            let item = data[i];
            let cols = [];

            for(let j=0; j<columns.length; j++) {
                cols.push(item[columns[j]]);
            }

            rows.push(cols);
        }

        return xlsx.build([{name: "Sheet", data: rows}]);

    }
}

module.exports = Export;