import styled, { keyframes } from 'styled-components';

const captureFrames = keyframes`
0% {
    background-color: #fff;
  }
  50% {
    background-color: red;
  }
  100% {
    background-color: #fff;
  }
`;

const shakeFrames = keyframes`
0% {
  transform: rotate(-10deg);
}
10% {
  transform: rotate(10deg);
}
20% {
  transform: rotate(0deg) translate(0, -30px);
}
30% {
  transform: rotate(-10deg) translate(0, 0);
}
40% {
  transform: rotate(10deg);
}
50% {
  transform: rotate(-10deg);
}
60% {
  transform: rotate(0deg) translate(0, -30px);
}
70% {
  transform: rotate(10deg) translate(0, 0);
}
80% {
  transform: rotate(-10deg);
}
90% {
  transform: rotate(10deg);
}
100% {
  transform: rotate(-10deg);
}
`;

export const SpinnerPokeballContainer = styled.div`
	display: grid;
	min-height: 100vh;
	min-width: 100%;
	place-items: center;
	position: fixed;
	overflow: hidden;
	top: 0;
	z-index: 20;
	transform: scale(1.05);
	background-color: rgba(0, 0, 0, 0.5);
`;

export const SpinnerPokeballItem = styled.div`
	width: 60px;
	height: 60px;
	background-color: #fff;
	border-radius: 50%;
	position: relative;
	overflow: hidden;
	border: 4px solid;
	animation: ${shakeFrames} 2s linear 0s infinite;
	&:after {
		content: '';
		position: absolute;
		width: 60px;
		height: 32px;
		background-color: red;
		border-bottom: 4px solid;
		top: -4px;
	}

	&:before {
		content: '';
		position: absolute;
		background-color: #fff;
		width: 1rem;
		height: 1rem;
		border: 4px solid;
		border-radius: 50%;
		bottom: 18px;
		right: 18px;
		z-index: 1;
		animation: ${captureFrames} 1s linear 0s infinite;
	}
`;
