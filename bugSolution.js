```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```