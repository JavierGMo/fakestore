export class Product {
    constructor(dataToParse=undefined) {
        this.id = dataToParse?.['id']??0;
        this.title = dataToParse?.['title']??'';
        this.price = dataToParse?.['price']??'';
        this.category = dataToParse?.['category']??'';
        this.description = dataToParse?.['description']??'';
        this.image = dataToParse?.['image']??'';
        this.rating = {
            count: dataToParse?.['rating']?.['count']??0,
            rate: dataToParse?.['rating']?.['rate']??0
        };
        this.isEmptyData = true;
    }

    /**
     * @param {boolean} value
     */
    set emptyDataChange(value){
        this.isEmptyData = value;
    }

    toString(){
        return this.title;
    }
}