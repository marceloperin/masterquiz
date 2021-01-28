import React from 'react';

export default function QuizPages() {

  const params = new URLSearchParams(window.location.search);
  const name = params.get('name');

  return (
    <div>
      <p style="color: #000">Hello ${name}</p>
    </div>
  );
}
