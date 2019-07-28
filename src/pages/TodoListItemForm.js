import React, { Component } from 'react'
import Header from './../containers/templates/Header';
class TodoListItemForm extends Component {
  render() {
    return (
      <div>
      <Header/>
  <div className="project">
      <div className="container">
          <div className="row">
              <div className="col-md-8 m-auto">
                  <h5 className="display-4 text-center">Create / Edit To-Do Item</h5>
                  <hr />
                  <form>
                      <div className="form-group">
                          <input type="text" className="form-control form-control-lg " placeholder="Item Name" />
                      </div>
                     
                     
                      <div className="form-group">
                          <textarea className="form-control form-control-lg" placeholder="Description"></textarea>
                      </div>
                     
                      <h6>Estimated End Date</h6>
                      <div className="form-group">
                          <input type="date" className="form-control form-control-lg" name="end_date" />
                      </div>
                      <h6>Priority</h6>
                      <div className="form-group">
                          <input type="number" className="form-control form-control-lg" name="priority" />
                      </div>
                      <h6>Depend on To-Do Item</h6>
                      <div className="form-group">
                          <input type="number" className="form-control form-control-lg" name="item_id" />
                      </div>
                      <input type="submit" className="btn btn-primary btn-block mt-4" />
                  </form>
              </div>
          </div>
      </div>
  </div>
    </div>
    )
  }
}

export default TodoListItemForm
