import React from "react";
import './Reward.css'

const Reward = () => {
  return (
    <div class="at-reward-card">
      <div class="at-reward-card__header">
        <svg
          class="at-reward-card__thumbnail"
          width="140"
          height="140"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Sketch Flat Logo</title>
          <g fill="none" fill-rule="evenodd">
            <path
              d="M256 475L9 188 116 43l140-15 140 15 107 145z"
              fill="#FFAE00"
            />
            <path d="M256 475L9 188h494z" fill="#CCC" />
            <path d="M256 475L109 188h294z" fill="#EEE" />
            <path d="M256 28L109 188h294z" fill="#FFF" />
            <path
              d="M116 43l-55 73-52 72h101zM396 43l55 73 52 72H402z"
              fill="#E7E7E7"
            />
            <path
              d="M116 43l-7 145L256 28zM396 43l7 145L256 28z"
              fill="#F3F3F3"
            />
          </g>
        </svg>
      </div>
      <div class="at-reward-card__content">
        <h2>Congratulations!</h2>
        <p>Your Point is Credited.</p>
      </div>
      {/* <div class="at-reward-card__footer">
        <button class="at-reward-card__button">No Thanks</button>
        <button class="at-reward-card__button">Claim Reward</button>
      </div> */}
    </div>
  );
};

export default Reward;
