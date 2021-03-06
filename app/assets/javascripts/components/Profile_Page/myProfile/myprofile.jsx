class MyProfile extends React.Component{
  constructor(props) {
  super(props);
    this.state = {
      service : this.props.service,
      reviews : this.props.reviews,
      user: this.props.user,
      categories: this.props.categories,
      show_edit : false,
      show_delete : false,
      show_add : false
    }
    this.updatedProfile = this.updatedProfile.bind(this);
    this.changeService = this.changeService.bind(this);
    this.deleteService = this.deleteService.bind(this);
    console.log("user is :", this.state.user);
    console.log("services is:", this.state.service);
  };
  
  changeService(service) {
    console.log("Refreshing...............",service);
    this.setState({service: service});
  }

  deleteService(service) {
    console.log("Refreshing...............",service);
    this.setState({service: service});
  }
  addProfile() {
    if(this.show_delete != 'false' ) {
      this.setState({show_delete: false})
    }
    if(this.show_edit != 'false') {
      this.setState({show_edit: false})
    }
    this.setState(prevState => ({
      show_add: !prevState.show_add
    }));
  };

  editProfile() {
    if(this.show_delete != 'false') {
      this.setState({show_delete: false})
    }
    if(this.show_add != 'false') {
      this.setState({show_add: false})
    }
    this.setState(prevState => ({
      show_edit: !prevState.show_edit
    }));
  };

  updatedProfile(data) {
    if(data.service) {
      this.setState({service : data.service})
    } 
    if(data.user) {
      this.setState({user : data.user})
    }
  };

  deleteProfile() {
    if(this.show_edit != 'false') {
      this.setState({show_edit: false})
    }
    if(this.show_add != 'false') {
      this.setState({show_add: false})
    }
    this.setState(prevState => ({
      show_delete: !prevState.show_delete
    }));
  };

  render() {
    const editDiv = (this.state.show_edit)?<EditService current_user={this.state.user} service={this.state.service} changeService={this.changeService}/> : ''
    const deleteDiv = (this.state.show_delete)?<DeleteService service={this.state.service} changeService={this.changeService} deleteService={this.deleteService}/> : ''
    const addDiv = (this.state.show_add)?<AddService categories = {this.state.categories} changeService={this.changeService}/> : ''
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <h2 className="orange-text center"><i> My Profile</i></h2>
            <div className="fixed-action-btn horizontal">
              <a className="btn-floating btn-large red">
                <i className="large material-icons">menu</i>
              </a>
              <ul>
                <li>
                  <a className="btn-floating green">
                    <i className="material-icons" onClick={() => {this.editProfile();}}>mode_edit</i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating orange darken-3">
                    <i className="material-icons" onClick={() => {this.deleteProfile();}}>delete</i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating purple lighten-1">
                    <i className="material-icons" onClick={() => {this.addProfile();}}>add</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col s12 m6"><ServiceCard user={this.state.user} service={this.state.service}/></div>
          <div className="col s12 m6">{editDiv}</div>
          <div className="col s12 m6">{deleteDiv}</div>
          <div className="col s12 m6">{addDiv}</div>
        </div>
            <div className="row"><ReviewsList reviews={this.state.reviews}/></div>
      </div> 
    )
    }
  }