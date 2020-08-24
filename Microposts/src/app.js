import { http } from './http';
import { ui } from './UI';
//Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

//Listen for add post
document.querySelector('.post-submit').addEventListener('click',
  submitPost);

//Listen for delete
document.querySelector('#posts').addEventListener('click',
  deletePost);

//Listen for edit state
document.querySelector('#posts').addEventListener('click',
  enableEdit);
//Listen for cancel
document.querySelector('.card-form').addEventListener('click',
  cancelEdit);

//Get Post
function getPosts() {
  http.get('http://localhost:3000/posts')
    .then(data => ui.showPosts(data))
    .catch(err => console.log(err));
}

//submit post
function submitPost(e) {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;
  // in ES2015 syntax no need to put key and value, if key and value are same
  //ES 5 syntax
  // const data={
  //   title:title,
  //   data:data
  // }
  //ES 2015 syntax
  const data = {
    title,
    body
  }
  //Validate Input
  if (title === '' || body === '') {
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    //Chech for ID
    if (id === '') {
      //Create post
      http.post('http://localhost:3000/posts', data)
        .then(data => {
          ui.showAlert('Post added', 'alert alert-success');
          ui.clearFields();
          getPosts();
        })
        .catch(err => console.log(err));
    }
    else {
//Update Post
http.put(`http://localhost:3000/posts/${id}`, data)
        .then(data => {
          ui.showAlert('Post updated', 'alert alert-success');
          ui.changeFormState('add')
          getPosts();
        })
        .catch(err => console.log(err));
    }
  }
}

//Delete Post
function deletePost(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    //dataset.id is used to get the generated id (data-id attribute )of the post(see anchor tag in ui.showPost())
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are you sure?')) {
      http.delete(`http://localhost:3000/posts/${id}`)
        .then(data => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch(err => console.log(err))
    }
  }
  e.preventDefault();
}

//Enable Edit State
function enableEdit(e) {
  if (e.target.parentElement.classList.contains('edit')) {
    //dataset.id is used to get the generated id (data-id attribute )of the post(see anchor tag in ui.showPost())
    const id = e.target.parentElement.dataset.id;
    const body = e.target.parentElement.previousElementSibling.textContent;
    const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    //console.log(id,body,title);
    const data = {
      id,
      title,
      body
    }
    ui.fillForm(data);

  }
  e.preventDefault();
}

//Cancel Edit State
function cancelEdit(e) {
  if (e.target.classList.contains('post-cancel')) {
    ui.changeFormState('add');
  }
  e.preventDefault();
}