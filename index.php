<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Document</title>
</head>
<body>
<main id="root"></main>
<script src="build/static/main.js"></script>
<script type="text/babel">

    const App = () => {
        return (
            <h1>Hello World</h1>
        );
    };

    // Render the component to the DOM
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

</script>
</body>
</html>