@extends('layout.main', ['categories' => $pageData['categoriesData']])
@section('content')

    <!-- Container -->
    <div class="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <!-- Header -->
        <div class="mb-6">
            <p class="text-gray-400 text-sm">
                Home
                <span class="mx-1">></span>
                <span class="text-gray-600">Cart</span>
            </p>
            <h1 class="text-3xl font-bold">YOUR CART</h1>
        </div>

        <div class="flex flex-col lg:flex-row items-start gap-6">
            <!-- Cart Section -->
            <div class="flex-1 space-y-6">
                <!-- Cart Items -->
                @foreach($cartItems as $item)
                    <div class="flex items-center justify-between border-b pb-4">
                        <div class="flex items-center space-x-4 gap-6">
                            <img
                                src="{{ $item['image'] }}"
                                alt="{{ $item['name'] }}"
                                class="w-20 h-20 object-cover rounded"
                            />
                            <div>
                                <h2 class="text-lg font-bold">{{ $item['name'] }}</h2>
                                <p class="text-gray-600 text-sm">
                                    Size: {{ $item['size'] }}<br />
                                    Color: {{ $item['color'] }}
                                </p>
                                <p class="mt-2 font-bold text-lg">${{ $item['price'] }}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4 gap-4">
                            <!-- Quantity Controls -->
                            <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">-</button>
                            <span class="font-bold text-lg">{{ $item['quantity'] }}</span>
                            <button class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">+</button>
                            <!-- Trash Icon -->
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                @endforeach
            </div>

            <!-- Order Summary -->
            <div class="w-full lg:w-1/3 p-6 bg-gray-50 rounded-lg shadow">
                <h2 class="text-xl font-bold mb-4">Order Summary</h2>
                <div class="space-y-3 text-gray-700">
                    <div class="flex justify-between">
                        <span>Subtotal</span>
                        <span class="font-bold">${{ $orderSummary['subtotal'] }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Discount (-{{ $orderSummary['discountPercentage'] }}%)</span>
                        <span class="text-red-500 font-bold">-${{ $orderSummary['discount'] }}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Delivery Fee</span>
                        <span class="font-bold">${{ $orderSummary['deliveryFee'] }}</span>
                    </div>
                    <div class="border-t pt-4 flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>${{ $orderSummary['total'] }}</span>
                    </div>
                </div>

                <!-- Promo Code -->
                <div class="mt-6">
                    <input
                        type="text"
                        placeholder="Add promo code"
                        class="w-full border px-4 py-2 rounded-md mb-4"
                    />
                    <button class="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">Apply</button>
                </div>

                <!-- Checkout Button -->
                <button
                    class="w-full bg-black text-white py-3 mt-4 rounded-md flex items-center justify-center space-x-2"
                >
                    <span>Go to Checkout</span>
                    <span>&rarr;</span>
                </button>
            </div>
        </div>

        <!-- Related Items Carousel -->
        <div class="mt-12">
            <h2 class="text-2xl font-bold mb-4">Related Items</h2>
            <div class="relative">
                <!-- Carousel Container -->
                <div class="flex overflow-x-scroll space-x-6">
                    @foreach($relatedItems as $related)
                        <div class="min-w-[200px] p-4 bg-gray-100 rounded-lg shadow">
                            <img
                                src="{{ $related['image'] }}"
                                alt="{{ $related['name'] }}"
                                class="w-full h-40 object-cover rounded"
                            />
                            <h3 class="text-lg font-bold mt-2">{{ $related['name'] }}</h3>
                            <p class="text-gray-600">${{ $related['price'] }}</p>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>

@endsection

@section('data')
    <script>
        {{-- Data from controller can be passed here if necessary --}}
    </script>
@endsection
