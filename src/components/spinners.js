import React from "react";

export const PacmanSpinner = (props) => {
    const {
        spinColor = '#cdffb2',
        pause = false,
    } = props;

    return (
        <React.Fragment>
            {!pause ? (
                <style>
                    {`
            .spinner .background {
              fill: #555;
            }
            .spinner .line {
              animation: PacMan 5s infinite;
              fill: none;
              stroke: ${spinColor};
              stroke-width: 25;
            }
            .spinner .spinner {
              animation: Spin 2s infinite linear
            }
            @keyframes PacMan {
              0% {
                stroke-dasharray: 79px 79;
              }
              50% {
                stroke-dasharray: 1px 79;
              }
              100% {
                stroke-dasharray: 79px 79;
              }
            }
            @keyframes Spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
            `}
                </style>
            ) : (<style></style>)}
            <svg className="spinner" width="100" height="100" viewBox="0 0 100 100">
                <circle className="background" r="24" cx="50" cy="50" />
                <path
                    className="line"
                    d="M 37.5,50 C 37.5,43.096441 43.096441,37.5 50,37.5 C 56.903559,37.5 62.5,43.096441 62.5,50 C 62.5,56.903559 56.903559,62.5 50,62.5 C 43.096441,62.5 37.5,56.903559 37.5,50"
                />
            </svg>
        </React.Fragment>
    )
};

export const LoadingSpinner = ({ pause }) => {
    return (
        <svg id={pause ? "": "loading-spinner"} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <g fill="none">
                <path id="track" fill="#C6CCD2" d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 Z"/>
                <path id="section" fill="#3F4850" d="M24,0 C37.254834,0 48,10.745166 48,24 L44,24 C44,12.954305 35.045695,4 24,4 L24,0 Z"/>
            </g>
        </svg>
    )
};

export const LoadingBar = ({ pause }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22">
            <g>
                <rect id={pause ? "": "loading-bar-left"} width="8" height="28" fill="#E1EAAF" />
                <rect id={pause ? "": "loading-bar-middle"} width="8" height="28" x="14" fill="#EAD9C9" />
                <rect id={pause ? "": "loading-bar-right"} width="8" height="28" x="28" fill="#DAE3E8" />
            </g>
        </svg>
    )
};


