@extends('layout.auth-state')
@section('content')
    <script>
        window.__CONFIRMATION_TOKEN__ = "{{$confirmationToken}}"
    </script>
    <div id="294uuei" class="auth-modal">
        {{-- csr --}}
    </div>
@endsection
