@extends('layout.main', ['categories' => $pageData['categoriesData']])
@section('content')
    <main>
        <div>Cart Page</div>
    </main>
@endsection
@section('data')
    <script></script>
    {{-- Use this place to pass data from page context to the DOM --}}
@endsection
