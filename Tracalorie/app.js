//Storage Controller
const StorageCtrl = (function () {

    //public method
    return {
        storeItem: function (item) {
            let items;
            //Check if nay items in LS

            if (localStorage.getItem('items') === null) {
                items = [];
                //Pust new item
                items.push(item);
                //Set LS
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                //Get what is already in LS
                items = JSON.parse(localStorage.getItem('items'));
                //Push new item
                items.push(item);
                //Re set to LS
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemForStorage: function () {
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];
            }
            else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateItemStorage: function (updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function (item, index) {
                if (updatedItem.id == item.id) {
                    items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function (id) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function (item, index) {
                if (id == item.id) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearItemFromStorage: function () {
            localStorage.removeItem('items');
        }
    }
})();


//Item Controller
const ItemCtrl = (function () {
    //Item Contructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    //Data Structure / State
    const data = {
        // items: [
        //     // { id: 0, name: 'Streak Dinner', calories: 1200 },
        //     // { id: 1, name: 'Cookies', calories: 400 },
        //     // { id: 2, name: 'Egg', calories: 300 }
        // ],
        items: StorageCtrl.getItemForStorage(),
        currentItem: null,//During update
        totalCalories: 0
    }
    //Public methods
    return {
        getItems: function () {
            return data.items;
        },
        addItem: function (name, calories) {
            //Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            //Calories to number
            calories = parseInt(calories);
            //Create new Item
            newItem = new Item(ID, name, calories);
            //Add to items array
            data.items.push(newItem)
            return newItem;
        },
        getItemById: function (id) {
            let found = null;
            //Loop through items
            data.items.forEach(function (item) {
                if (item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        updateItem: function (name, calories) {
            //Calories to number
            calories = parseInt(calories);
            let found = null;
            data.items.forEach(function (item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });
            return found;
        },

        deleteItem: function (id) {
            //Get ids
            const ids = data.items.map(function (item) {
                return item.id;
            });
            //Get index
            const index = ids.indexOf(id);

            //Remove item
            data.items.splice(index, 1);
        },
        clearAllItems: function () {
            data.items = [];
        },
        setCurrentItem: function (item) {
            data.currentItem = item;
        },
        getCurrentItem: function () {
            return data.currentItem;
        },
        getTotalCalories: function () {
            let total = 0;
            //Loop through items and add cals
            data.items.forEach(function (item) {
                total += item.calories;
            });
            //Set total cal in data Structure
            data.totalCalories = total;
            //Return total
            return data.totalCalories;
        },
        logData: function () {
            return data
        }
    }
})();


//UI Controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        listItems: '#item-list li',
        addBtn: '.add-btn',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        clearBtn: '.clear-btn',
        itemNameInput: '#item-name',
        itemCaloriesInput: '#item-calories',
        totalCalories: '.total-calories'
    }
    //Public methods
    return {
        populateItemList: function (items) {
            let html = '';
            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name} : </strong><em>${item.calories} Calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i>
                </a>
            </li>`
            });
            //Inser List Items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCaloriesInput).value
            }
        },
        addListItem: function (item) {
            //Show the list
            document.querySelector(UISelectors.itemList).style.display = 'block';
            //Create li element
            const li = document.createElement('li');
            //Add class
            li.className = 'collection-item';
            //Add id
            li.id = `item-${item.id}`;
            //Add HTML
            li.innerHTML = `<strong>${item.name} : </strong>
                <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
                </a>`;
            //Insert Item
            document.querySelector(UISelectors.itemList).insertAdjacentElement
                ('beforeend', li);
        },
        updateListItem: function (item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            //turn node list into array
            listItems = Array.from(listItems);

            listItems.forEach(function (listItem) {
                const itemID = listItem.getAttribute('id');
                if (itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name} : </strong>
                    <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                    </a>`;
                }
            })
        },
        deleteListItem: function (id) {
            const itemId = `#item-${id}`;
            const item = document.querySelector(itemId);
            item.remove();
        },
        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCaloriesInput).value = '';
        },
        addItemToForm: function () {
            document.querySelector(UISelectors.itemNameInput).value =
                ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCaloriesInput).value =
                ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        removeItems: function () {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            //Turn node list into array
            listItems = Array.from(listItems);
            listItems.forEach(function (item) {
                item.remove();
            })
        },
        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function () {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        getSelectors: function () {
            return UISelectors;
        }
    }
})();


//App Controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
    //Load event listeners
    const loadEventListener = function () {
        //Get UI Selectors
        const UISelectors = UICtrl.getSelectors();
        //Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        //Disable submit on enter / disabling enter key
        document.addEventListener('keypress', function (e) {
            // keycode for enter is 13; few browser doesn't support keycode so using which
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });

        //Edit item click event
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        //Update item event
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        //Back Button event
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

        //Delete item event
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        //Clear items event
        document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);

    }
    //Add item submit
    const itemAddSubmit = function (e) {

        //Get form input from UI Controller
        const input = UICtrl.getItemInput();

        //ceck for name and calories input
        if (input.name !== '' && input.calories !== '') {

            //Add item
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            //Add item to UI list
            UICtrl.addListItem(newItem);

            //Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            //Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            //Store in Localstorage
            StorageCtrl.storeItem(newItem);

            //Clear field
            UICtrl.clearInput();

        }
        e.preventDefault();
    }

    //Click Edit item
    const itemEditClick = function (e) {
        if (e.target.classList.contains('edit-item')) {
            //Get list item id (item-0, item-1)
            const listid = e.target.parentNode.parentNode.id;
            //Break into an array
            const listIdArr = listid.split('-');
            //Get the actual id
            const id = parseInt(listIdArr[1]);
            //const item
            const itemToEdit = ItemCtrl.getItemById(id);
            console.log('itemToEdit ', itemToEdit);
            //Set current item
            ItemCtrl.setCurrentItem(itemToEdit);
            //Add item to form
            UICtrl.addItemToForm();
        }
        e.preventDefault();
    }

    //Update item submit
    const itemUpdateSubmit = function (e) {
        //Get item input
        const input = UICtrl.getItemInput();
        //Update item
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        //Update UI
        UICtrl.updateListItem(updatedItem);
        //Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        //Update local storage
        StorageCtrl.updateItemStorage(updatedItem);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    //Delete button event
    const itemDeleteSubmit = function (e) {
        //Get Current item
        const currentItem = ItemCtrl.getCurrentItem();

        // Delete from Data structure 
        ItemCtrl.deleteItem(currentItem.id);

        //Delete from UI
        UICtrl.deleteListItem(currentItem.id);
        //Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        //Delete from local storage
        StorageCtrl.deleteItemFromStorage(currentItem.id);

        UICtrl.clearEditState();

        e.preventDefault();
    }

    //Clear items event
    const clearAllItemsClick = function () {
        //Delete all items from Data structure
        ItemCtrl.clearAllItems();

        //Get total calories
        const totalCalories = ItemCtrl.getTotalCalories();
        //Add total calories to UI
        UICtrl.showTotalCalories(totalCalories);

        //Remove from UI
        UICtrl.removeItems();

        //Clear from local storage
        StorageCtrl.clearItemFromStorage();
        //Hide UL
        UICtrl.hideList();
    }

    //Public methods
    return {
        init: function () {
            // console.log('initializing App...');
            //Clear edit state / set initial state
            UICtrl.clearEditState();
            //Fetch Itmes from Data Structure
            const items = ItemCtrl.getItems();

            //check if any item
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                //Populate List with items
                UICtrl.populateItemList(items);
            }

            //Get total calories
            const totalCalories = ItemCtrl.getTotalCalories();

            //Add total calories to UI
            UICtrl.showTotalCalories(totalCalories);

            //Load event Listener
            loadEventListener();
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

App.init();