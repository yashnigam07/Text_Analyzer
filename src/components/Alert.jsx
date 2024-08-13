import React from 'react';

export default function Alert(props) {
  if (!props.message) return null;

  return (
    <div
      className={`${
        props.mode === 'light' ? 'bg-blue-100 text-blue-900' : 'bg-gray-800 text-white'
      } p-4 rounded-lg shadow-md flex justify-between items-center`}
      role="alert"
    >
      {props.message}
      <button
        type="button"
        className={`ml-4 text-xl font-bold focus:outline-none ${
          props.mode === 'light' ? 'text-blue-900' : 'text-white'
        }`}
        aria-label="Close"
        onClick={props.onClose}
      >
        &times;
      </button>
    </div>
  );
}
