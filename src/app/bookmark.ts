export class Bookmark {
    id: number;
    name = '';
    url = '';
    description = '';
    timeStamp: Date = new Date();
    isHidden = false;
    tags: string[] = [];
    // constructor(name, url, description, isHidden, tags, id= 0) {
    //     this.name = name;
    //     this.url = url;
    //     this.description = description;
    //     this.timeStamp = new Date();
    //     this.isHidden = isHidden;
    //     this.tags = tags;
    // }
}
