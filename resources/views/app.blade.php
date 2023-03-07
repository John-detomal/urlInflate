<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta name="description" content="Web site created using create-react-app">
        <meta name="theme-color" content="#317EFB"/>
        

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <!-- Scripts -->
        @viteReactRefresh
        @vite(['resources/sass/main.scss', 'resources/js/app.jsx'])

        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        <link rel="stylesheet" as="font" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">

    </head>
    <body>
        @inertia



    </body>
</html>
