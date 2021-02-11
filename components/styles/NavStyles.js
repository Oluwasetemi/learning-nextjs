import styled from 'styled-components';

const NavStyles = styled.div`
	nav.nav {
		height: 50px;
		padding: 10px;
		background: #000;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}

	.nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	.nav ul li a {
		margin: 5px 15px;
	}
`;

export default NavStyles;
