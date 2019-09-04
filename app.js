const data = {
  users: [
    {
      id: 1,
      age: 33,
      name: "Roger",
      sex: "male"
    },
    {
      id: 2,
      age: 33,
      name: "Monika",
      sex: "female"
    },
    {
      id: 3,
      age: 18,
      name: "Roksana",
      sex: "female"
    },
    {
      id: 4,
      age: 15,
      name: "Zuzia",
      sex: "female"
    }
  ]
};
const Item = ({ content }) => (
  <div className="userInfo">
    <h1>{content.name}</h1>
    <p>User Informations</p>
    <p>
      User Age: <strong>{content.age}</strong>
    </p>
    <p>User Sex: {content.sex}</p>
  </div>
);

class Items extends React.Component {
  state = {
    select: "all"
  };

  handleFilterAll(option) {
    this.setState({
      select: option
    });
  }

  showUsers = () => {
    let users = this.props.data.users;
    switch (this.state.select) {
      case "all":
        return users.map(user => <Item content={user} key={user.id} />);
      case "female":
        users = users.filter(user => user.sex === "female");
        return users.map(user => <Item content={user} key={user.id} />);
      case "male":
        users = users.filter(user => user.sex === "male");
        return users.map(user => <Item content={user} key={user.id} />);
      default:
        return "No Data";
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.handleFilterAll.bind(this, "all")}>All</button>
        <button onClick={this.handleFilterAll.bind(this, "female")}>
          Women
        </button>
        <button onClick={this.handleFilterAll.bind(this, "male")}>Men</button>
        {this.showUsers()}
      </div>
    );
  }
}

ReactDOM.render(<Items data={data} />, document.getElementById(`root`));
