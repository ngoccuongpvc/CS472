// data.js
let data = [];
export function get_items() {
    return data;
}
export function add_item(new_item) {
    // add item (if id does not exist)
    // return true if item is added successfully, false otherwise
    const items = get_items();
    const existing_item = items.find(item => item.id === new_item.id);
    if (existing_item) {
        return false;
    }
    items.push(new_item);
    return true;
}
export function update_item_title_by_id(id, new_title) {
    // update the title (if id exist)
    // return true if item is update successfully, false otherwise
    const items = get_items();
    const existing_item = items.find(item => item.id === id);
    if (!existing_item) {
        return false;
    }
    existing_item.title = new_title;
    return true;
}
export function delete_item_by_id(id) {
    // delete the item (if id exist)
    // return true if item is deleted successfully, false otherwise
    const items = get_items();
    const item_index = items.findIndex(item => item.id === id);
    if (item_index === -1) {
        return false;
    }
    items.splice(item_index, 1);
    return true;
}
export function get_item_title_by_id(id) {
    // return the item title by id (if id exist)
    const items = get_items();
    const existing_item = items.find(item => item.id === id);
    if (!existing_item) {
        return "";
    }
    return existing_item.title;
}