class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.title = document.querySelector('#title');
        this.body = document.querySelector('#body');
        this.id = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';

    }
    showPosts(posts) {
        let output = '';
        //console.log(posts);
        posts.forEach((post) => {
            output += `
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                    <i class="fa fa-pencil"></i>
                    </a>

                    <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>
            `;
        });
        this.post.innerHTML = output;
    }

    //Show alert
    showAlert(message, className) {
        this.clearAlert();
        //Create div
        const div = document.createElement('div');
        //Add Classes
        div.className = className;
        //Add text and append it
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.postsContainer');
        //Insert alert before post
        container.insertBefore(div, this.post);
        //Timeout
        setTimeout(() => {
            this.clearFields();
        }, 3000);

    }

    //Clear Alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert)
            currentAlert.remove();
    }
    //Clear form iled
    clearFields() {
        this.title.value = '';
        this.body.value = '';
    }

    //Fill form to edit
    fillForm(data) {
        this.title.value = data.title;
        this.body.value = data.body;
        this.id.value = data.id;

        this.changeFormState('edit');
    }

    //Clear ID hidden value
    clearIdInput() {
        this.id.value = '';
    }

    //Change Form state
    changeFormState(type) {
        console.log('state:' ,type);
        if (type === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            //Create cancel button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));
            //Get Parent
            const cardForm = document.querySelector('.card-form');
            //Get element to insert before
            const formEnd = document.querySelector('form-end');
            //Insert cancel button
            cardForm.insertBefore(button, formEnd);
        } else {
            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            //Remove cancel btn if it is there
            if (document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }
            //Clear ID from hidden filed
            this.clearIdInput();
            //clear text field
            this.clearFields();
        }
    }
}
export const ui = new UI();