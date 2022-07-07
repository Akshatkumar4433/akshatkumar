class NavigationDashboard extends React.Component {
    state = {
        items: [
            {
                name: 'About',
                id: uuid.v4(),
            },
            {
                name: 'Projects',
                id: uuid.v4(),
            },
            {
                name: 'Blog',
                id: uuid.v4(),
            },
        ]
    }
    render() {
        return(
             <NavigationItemsList 
                items = {this.state.items}
             />
        );
    }
}

class NavigationItemsList extends React.Component {
    render() {
        const items = this.props.items.map((item) => (
            <Item
              name = {item.name} 
              id = {item.id}
              key = {item.id} //Quick Error fix
            />
        ));
        return(
            <div>
                {items}
            </div>
        );
    }
}

class Item extends React.Component {
    render() {
        return(
            <div>{this.props.name}</div>
        );
    }
}



ReactDOM.render(
    <NavigationDashboard/>  ,
    document.getElementById('navigation')
);
