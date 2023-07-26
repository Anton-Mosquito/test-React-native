interface customProps {
  // тут только что были типы, и ничего не сломалось!
  message: string;
}


interface customState {
  count: number;
}


class App extends React.Component<customProps, customState> {
  state: customState = {
    // customState только что был типом
    count: 0,
  };
  render() {
    return (
      <div>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
