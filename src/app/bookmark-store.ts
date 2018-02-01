import { Bookmark } from './bookmark';

export class BookmarkStore {
    allBookmarks: Bookmark[];
    filteredBookmarks: Bookmark[];
    tagFilters: string[];
    filtersEnabled: boolean;
    filterHidden: boolean;
}

