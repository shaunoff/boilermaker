import React, { Component } from 'react';
import styles from './styles';

const Header = ({children}) => (
		<div style={{...styles.row,...styles.header}}>
			{children}
		</div>

);

const Body = ({children}) => {
	children = React.Children.map(children, (child,index) => React.cloneElement(child, {index, key: index}))
	return (
		<div>
			{children}
		</div>
	)
}


const Row = ({children,key,index}) => (
		<div key={index} style={{...styles.rowContent,...(index % 2 === 0 ? styles.evenRow : null)}}>
			{children}
		</div>
);

const HeaderCell = ({children,title}) => (
	<div style={styles.headerCell}>
		<div>{title || children}</div>
	</div>
);

const Cell = ({children}) => (
	<div style={{flex: 1}}>
		<div>{children}</div>
	</div>
);


class Table extends Component {
	static Header = Header
	static HeaderCell = HeaderCell
	static Body = Body
	static Row = Row
	static Cell = Cell
	render() {
		return (
			<div style={styles.container}>
				{this.props.children}
			</div>
		);
	}
}

export default Table;
