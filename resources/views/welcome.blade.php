<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{--Style--}}
    <link href="{{ asset('css/index.css') }}" rel="stylesheet">
    <title>Laravel</title>
</head>
<body>
<div id="root"></div>
<script src="{{ asset('js/index.js') }}"></script>
</body>
</html>
