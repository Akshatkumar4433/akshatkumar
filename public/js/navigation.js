class NavigationDashboard extends React.Component {
    state = {
        items: [
            {
                name: 'Akshat Kumar',
                type: 'logo',
                id: uuid.v4(),
                link: '#'
            },
            {
                name: 'About',
                type: 'link',
                id: uuid.v4(),
                link: '#'
            },
            {
                name: 'Projects',
                type: 'link',
                id: uuid.v4(),
                link: '#'
            },
            {
                name: 'Blog',
                type: 'link',
                id: uuid.v4(),
                link: '#'
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
              type = {item.type}
              link = {item.link}
            />
        ));
        return(
            <div className = 'navigation-list'>
                {items}
            </div>
        );
    }
}

class Item extends React.Component {
    render() {
        if (this.props.type == 'logo') {
            return (
                <div className = 'box-logo' >
                    <a href = {this.props.link}>
                    <span>
                    {this.props.name}
                    </span>
                    </a>
                </div>
            )
        } else {
        return(
            <div className = 'box'>
                <a href = {this.props.link}>
                    <span>
                        {this.props.name}
                    </span>
                </a>
            </div>
        );
    }
    }
}





ReactDOM.render(
    <NavigationDashboard/>  ,
    document.getElementById('navigation')
);
