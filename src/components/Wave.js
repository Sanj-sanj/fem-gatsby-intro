import React, { useState } from 'react';
import { css } from '@emotion/react';

const Wave = () => {
  const [waves, setWaves] = useState(0);
  const label = `🙋‍♂️ ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: rebeccapurple;
        border: none;
        border-radius: 1rem;
        color: white;
        font-size: 1.25rem;
        padding: 0.5em;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};
export default Wave;
