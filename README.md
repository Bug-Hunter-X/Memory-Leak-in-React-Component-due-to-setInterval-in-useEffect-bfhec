# React setInterval Memory Leak

This example demonstrates a common mistake in React: using `setInterval` within the `useEffect` hook without proper cleanup.  This leads to memory leaks and unexpected behavior.

The `bug.js` file shows the faulty implementation. The `bugSolution.js` demonstrates the corrected version.

## Problem

The `setInterval` function is called repeatedly, but there's no mechanism to stop it when the component unmounts. This means that even after the component is removed from the DOM, the `setInterval` continues to run, potentially leading to memory leaks and unnecessary computations.

## Solution

The correct way to handle `setInterval` within `useEffect` is to return a cleanup function. This function is called when the component unmounts or when the dependencies of `useEffect` change, ensuring that the `setInterval` is cleared.