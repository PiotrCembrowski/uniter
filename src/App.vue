<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <!-- Header -->
        <header
            class="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="flex items-center justify-between">
                    <div>
                        <h1
                            class="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent"
                        >
                            Scientific Calculator
                        </h1>
                        <p class="text-slate-600 mt-1">
                            Comprehensive mathematical, physics, and chemistry
                            calculations
                        </p>
                    </div>
                </div>
            </div>
        </header>

        <!-- Navigation Tabs -->
        <nav
            class="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-[88px] z-40"
        >
            <div
                class="lg:w-[1200px] md:w-9/12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div class="flex space-x-1 overflow-x-auto">
                    <button
                        v-for="tab in tabs"
                        :key="tab.id"
                        @click="activeTab = tab.id"
                        :class="[
                            'px-6 py-3 text-sm font-medium rounded-t-lg whitespace-nowrap transition-all duration-200',
                            activeTab === tab.id
                                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
                        ]"
                    >
                        {{ tab.name }}
                    </button>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- Mathematics Tab -->
            <div v-show="activeTab === 'math'" class="space-y-8">
                <!-- Geometry Section -->
                <section>
                    <h2
                        class="text-2xl font-semibold text-slate-900 mb-6 flex items-center"
                    >
                        <span
                            class="w-1 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-3"
                        ></span>
                        Geometry
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <!-- Sphere -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Sphere
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Radius (r)</label
                                    >
                                    <input
                                        v-model.number="sphere.radius"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Volume = (4/3)πr³
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ sphereVolume }} units³
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Surface Area = 4πr²
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ sphereSurfaceArea }} units²
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Cylinder -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Cylinder
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Radius (r)</label
                                    >
                                    <input
                                        v-model.number="cylinder.radius"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Height (h)</label
                                    >
                                    <input
                                        v-model.number="cylinder.height"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Volume = πr²h
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ cylinderVolume }} units³
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Surface Area = 2πr(r+h)
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ cylinderSurfaceArea }} units²
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Cube -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Cube
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Side Length (a)</label
                                    >
                                    <input
                                        v-model.number="cube.side"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Volume = a³
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ cubeVolume }} units³
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Surface Area = 6a²
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ cubeSurfaceArea }} units²
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Cone -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Cone
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Radius (r)</label
                                    >
                                    <input
                                        v-model.number="cone.radius"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Height (h)</label
                                    >
                                    <input
                                        v-model.number="cone.height"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Volume = (1/3)πr²h
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ coneVolume }} units³
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Surface Area = πr(r+√(r²+h²))
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ coneSurfaceArea }} units²
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Rectangle -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Rectangle
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Length (l)</label
                                    >
                                    <input
                                        v-model.number="rectangle.length"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Width (w)</label
                                    >
                                    <input
                                        v-model.number="rectangle.width"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Area = l × w
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ rectangleArea }} units²
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Perimeter = 2(l + w)
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ rectanglePerimeter }} units
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Circle -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Circle
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Radius (r)</label
                                    >
                                    <input
                                        v-model.number="circle.radius"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Area = πr²
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ circleArea }} units²
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        Circumference = 2πr
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ circleCircumference }} units
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Algebra & Trigonometry Section -->
                <section>
                    <h2
                        class="text-2xl font-semibold text-slate-900 mb-6 flex items-center"
                    >
                        <span
                            class="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3"
                        ></span>
                        Algebra & Trigonometry
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <!-- Quadratic Formula -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Quadratic Formula
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >a</label
                                    >
                                    <input
                                        v-model.number="quadratic.a"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >b</label
                                    >
                                    <input
                                        v-model.number="quadratic.b"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >c</label
                                    >
                                    <input
                                        v-model.number="quadratic.c"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        x = (-b ± √(b²-4ac)) / 2a
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ quadraticRoots }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Trigonometric Functions -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Trigonometric Functions
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Angle (degrees)</label
                                    >
                                    <input
                                        v-model.number="trig.angle"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div
                                    class="pt-3 border-t border-slate-200 space-y-2"
                                >
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            sin(θ)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ trigSin }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            cos(θ)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ trigCos }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            tan(θ)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ trigTan }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Logarithms -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Logarithms
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Number (x)</label
                                    >
                                    <input
                                        v-model.number="logarithm.x"
                                        type="number"
                                        step="0.01"
                                        min="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Base (b)</label
                                    >
                                    <input
                                        v-model.number="logarithm.base"
                                        type="number"
                                        step="0.01"
                                        min="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div
                                    class="pt-3 border-t border-slate-200 space-y-2"
                                >
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            log₁₀(x)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ log10 }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            ln(x)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ naturalLog }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            log_b(x)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ logBase }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Exponentials -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Exponentials
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Base (a)</label
                                    >
                                    <input
                                        v-model.number="exponential.base"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Exponent (x)</label
                                    >
                                    <input
                                        v-model.number="exponential.exponent"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div
                                    class="pt-3 border-t border-slate-200 space-y-2"
                                >
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            a^x
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ exponentialResult }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            e^x
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ naturalExponential }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Combinatorics -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Combinatorics
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >n</label
                                    >
                                    <input
                                        v-model.number="combinatorics.n"
                                        type="number"
                                        step="1"
                                        min="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >r</label
                                    >
                                    <input
                                        v-model.number="combinatorics.r"
                                        type="number"
                                        step="1"
                                        min="0"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div
                                    class="pt-3 border-t border-slate-200 space-y-2"
                                >
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            n! (Factorial)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ factorial }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            P(n,r) = n!/(n-r)!
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ permutation }}
                                        </div>
                                    </div>
                                    <div>
                                        <div class="text-sm text-slate-600">
                                            C(n,r) = n!/(r!(n-r)!)
                                        </div>
                                        <div
                                            class="result-display text-lg font-semibold"
                                        >
                                            {{ combination }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Physics Tab -->
            <div v-show="activeTab === 'physics'" class="space-y-8">
                <!-- Mechanics Section -->
                <section>
                    <h2
                        class="text-2xl font-semibold text-slate-900 mb-6 flex items-center"
                    >
                        <span
                            class="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full mr-3"
                        ></span>
                        Mechanics
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <!-- Velocity -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Velocity
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Distance (m)</label
                                    >
                                    <input
                                        v-model.number="velocity.distance"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Time (s)</label
                                    >
                                    <input
                                        v-model.number="velocity.time"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        v = d/t
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ velocityResult }} m/s
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Acceleration -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Acceleration
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Initial Velocity (m/s)</label
                                    >
                                    <input
                                        v-model.number="acceleration.v0"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Final Velocity (m/s)</label
                                    >
                                    <input
                                        v-model.number="acceleration.v"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Time (s)</label
                                    >
                                    <input
                                        v-model.number="acceleration.time"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        a = (v - v₀)/t
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ accelerationResult }} m/s²
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Force -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Force (Newton's 2nd Law)
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass (kg)</label
                                    >
                                    <input
                                        v-model.number="force.mass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Acceleration (m/s²)</label
                                    >
                                    <input
                                        v-model.number="force.acceleration"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        F = ma
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ forceResult }} N
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Kinetic Energy -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Kinetic Energy
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass (kg)</label
                                    >
                                    <input
                                        v-model.number="kineticEnergy.mass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Velocity (m/s)</label
                                    >
                                    <input
                                        v-model.number="kineticEnergy.velocity"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        KE = ½mv²
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ kineticEnergyResult }} J
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Potential Energy -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Gravitational Potential Energy
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass (kg)</label
                                    >
                                    <input
                                        v-model.number="potentialEnergy.mass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Height (m)</label
                                    >
                                    <input
                                        v-model.number="potentialEnergy.height"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        PE = mgh (g = 9.81 m/s²)
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ potentialEnergyResult }} J
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Momentum -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Momentum
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass (kg)</label
                                    >
                                    <input
                                        v-model.number="momentum.mass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Velocity (m/s)</label
                                    >
                                    <input
                                        v-model.number="momentum.velocity"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        p = mv
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ momentumResult }} kg⋅m/s
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Waves & Electricity Section -->
                <section>
                    <h2
                        class="text-2xl font-semibold text-slate-900 mb-6 flex items-center"
                    >
                        <span
                            class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3"
                        ></span>
                        Waves & Electricity
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <!-- Wave Speed -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Wave Speed
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Frequency (Hz)</label
                                    >
                                    <input
                                        v-model.number="wave.frequency"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Wavelength (m)</label
                                    >
                                    <input
                                        v-model.number="wave.wavelength"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        v = fλ
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ waveSpeed }} m/s
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Ohm's Law -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Ohm's Law
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Voltage (V)</label
                                    >
                                    <input
                                        v-model.number="ohm.voltage"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Resistance (Ω)</label
                                    >
                                    <input
                                        v-model.number="ohm.resistance"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        I = V/R
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ current }} A
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        P = VI
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ electricPower }} W
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Pressure -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Pressure
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Force (N)</label
                                    >
                                    <input
                                        v-model.number="pressure.force"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Area (m²)</label
                                    >
                                    <input
                                        v-model.number="pressure.area"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        P = F/A
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ pressureResult }} Pa
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Power -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Power
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Work/Energy (J)</label
                                    >
                                    <input
                                        v-model.number="power.work"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Time (s)</label
                                    >
                                    <input
                                        v-model.number="power.time"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        P = W/t
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ powerResult }} W
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Density -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Density
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass (kg)</label
                                    >
                                    <input
                                        v-model.number="density.mass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Volume (m³)</label
                                    >
                                    <input
                                        v-model.number="density.volume"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        ρ = m/V
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ densityResult }} kg/m³
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Chemistry Tab -->
            <div v-show="activeTab === 'chemistry'" class="space-y-8">
                <!-- Stoichiometry & Solutions Section -->
                <section>
                    <h2
                        class="text-2xl font-semibold text-slate-900 mb-6 flex items-center"
                    >
                        <span
                            class="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full mr-3"
                        ></span>
                        Stoichiometry & Solutions
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <!-- Molarity -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Molarity
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Moles of solute (mol)</label
                                    >
                                    <input
                                        v-model.number="molarity.moles"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Volume of solution (L)</label
                                    >
                                    <input
                                        v-model.number="molarity.volume"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        M = n/V
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ molarityResult }} M
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Ideal Gas Law -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Ideal Gas Law
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Pressure (atm)</label
                                    >
                                    <input
                                        v-model.number="idealGas.pressure"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Volume (L)</label
                                    >
                                    <input
                                        v-model.number="idealGas.volume"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Temperature (K)</label
                                    >
                                    <input
                                        v-model.number="idealGas.temperature"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        PV = nRT (R = 0.0821 L⋅atm/mol⋅K)
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ idealGasMoles }} mol
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- pH Calculation -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                pH Calculation
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >[H⁺] concentration (M)</label
                                    >
                                    <input
                                        v-model.number="ph.hConcentration"
                                        type="number"
                                        step="0.000001"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        pH = -log[H⁺]
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ phValue }}
                                    </div>
                                </div>
                                <div class="pt-2">
                                    <div class="text-sm text-slate-600 mb-2">
                                        pOH = 14 - pH
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ pohValue }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Dilution -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Dilution
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Initial Concentration (M₁)</label
                                    >
                                    <input
                                        v-model.number="dilution.c1"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Initial Volume (V₁)</label
                                    >
                                    <input
                                        v-model.number="dilution.v1"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Final Volume (V₂)</label
                                    >
                                    <input
                                        v-model.number="dilution.v2"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        C₁V₁ = C₂V₂
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ finalConcentration }} M
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Molar Mass -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Moles & Mass
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass (g)</label
                                    >
                                    <input
                                        v-model.number="molarMass.mass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Molar Mass (g/mol)</label
                                    >
                                    <input
                                        v-model.number="molarMass.molarMass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        n = m/M
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ molesFromMass }} mol
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Percent Composition -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Percent Composition
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass of element (g)</label
                                    >
                                    <input
                                        v-model.number="percentComp.elementMass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Total mass of compound (g)</label
                                    >
                                    <input
                                        v-model.number="percentComp.totalMass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        % = (mass of element / total mass) × 100
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ percentComposition }}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Thermochemistry Section -->
                <section>
                    <h2
                        class="text-2xl font-semibold text-slate-900 mb-6 flex items-center"
                    >
                        <span
                            class="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full mr-3"
                        ></span>
                        Thermochemistry
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <!-- Heat Capacity -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Heat Capacity
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Mass (g)</label
                                    >
                                    <input
                                        v-model.number="heatCapacity.mass"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Specific Heat (J/g°C)</label
                                    >
                                    <input
                                        v-model.number="
                                            heatCapacity.specificHeat
                                        "
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Temperature Change (°C)</label
                                    >
                                    <input
                                        v-model.number="heatCapacity.deltaT"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        q = mcΔT
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ heatTransfer }} J
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Enthalpy -->
                        <div
                            class="calculation-card bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-all duration-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Enthalpy Change
                            </h3>
                            <div class="space-y-3">
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Heat Released/Absorbed (J)</label
                                    >
                                    <input
                                        v-model.number="enthalpy.heat"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        class="block text-sm font-medium text-slate-700 mb-1"
                                        >Moles (mol)</label
                                    >
                                    <input
                                        v-model.number="enthalpy.moles"
                                        type="number"
                                        step="0.01"
                                        class="w-full px-3 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                    />
                                </div>
                                <div class="pt-3 border-t border-slate-200">
                                    <div class="text-sm text-slate-600 mb-2">
                                        ΔH = q/n
                                    </div>
                                    <div
                                        class="result-display text-lg font-semibold"
                                    >
                                        {{ enthalpyChange }} J/mol
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Constants Tab -->
            <div v-show="activeTab === 'constants'" class="space-y-8">
                <section>
                    <h2
                        class="text-2xl font-semibold text-slate-900 mb-6 flex items-center"
                    >
                        <span
                            class="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mr-3"
                        ></span>
                        Physical Constants & Reference
                    </h2>
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <div
                            class="bg-white p-6 rounded-xl shadow-md border border-slate-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Universal Constants
                            </h3>
                            <div class="space-y-3 text-sm">
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Speed of light (c)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >3.00 × 10⁸ m/s</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Planck's constant (h)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >6.626 × 10⁻³⁴ J⋅s</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Gravitational constant (G)</span
                                    >
                                    <span
                                        class="font-mono text-slate-900 text-end"
                                        >6.674 × 10⁻¹¹ N⋅m²/kg²</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Avogadro's number (Nₐ)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >6.022 × 10²³ mol⁻¹</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Gas constant (R)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >8.314 J/(mol⋅K)</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-white p-6 rounded-xl shadow-md border border-slate-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Earth & Atomic
                            </h3>
                            <div class="space-y-3 text-sm">
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Acceleration due to gravity (g)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >9.81 m/s²</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Electron mass (mₑ)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >9.109 × 10⁻³¹ kg</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Proton mass (mₚ)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >1.673 × 10⁻²⁷ kg</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Elementary charge (e)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >1.602 × 10⁻¹⁹ C</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >Boltzmann constant (k)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >1.381 × 10⁻²³ J/K</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div
                            class="bg-white p-6 rounded-xl shadow-md border border-slate-200"
                        >
                            <h3
                                class="text-lg font-semibold text-slate-800 mb-4"
                            >
                                Mathematical Constants
                            </h3>
                            <div class="space-y-3 text-sm">
                                <div class="flex justify-between">
                                    <span class="text-slate-600">π (pi)</span>
                                    <span class="font-mono text-slate-900"
                                        >3.14159...</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >e (Euler's number)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >2.71828...</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600"
                                        >φ (Golden ratio)</span
                                    >
                                    <span class="font-mono text-slate-900"
                                        >1.61803...</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600">√2</span>
                                    <span class="font-mono text-slate-900"
                                        >1.41421...</span
                                    >
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-slate-600">√3</span>
                                    <span class="font-mono text-slate-900"
                                        >1.73205...</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Active tab state
const activeTab = ref("math");

// Tab configuration
const tabs = [
    { id: "math", name: "Mathematics" },
    { id: "physics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
    { id: "constants", name: "Constants" },
];

// Mathematics reactive data
const sphere = ref({ radius: 0 });
const cylinder = ref({ radius: 0, height: 0 });
const cube = ref({ side: 0 });
const cone = ref({ radius: 0, height: 0 });
const rectangle = ref({ length: 0, width: 0 });
const circle = ref({ radius: 0 });
const quadratic = ref({ a: 1, b: 0, c: 0 });
const trig = ref({ angle: 0 });
const logarithm = ref({ x: 1, base: 10 });
const exponential = ref({ base: 2, exponent: 1 });
const combinatorics = ref({ n: 5, r: 2 });

// Physics reactive data
const velocity = ref({ distance: 0, time: 1 });
const acceleration = ref({ v0: 0, v: 0, time: 1 });
const force = ref({ mass: 0, acceleration: 0 });
const kineticEnergy = ref({ mass: 0, velocity: 0 });
const potentialEnergy = ref({ mass: 0, height: 0 });
const momentum = ref({ mass: 0, velocity: 0 });
const wave = ref({ frequency: 0, wavelength: 0 });
const ohm = ref({ voltage: 0, resistance: 1 });
const pressure = ref({ force: 0, area: 1 });
const power = ref({ work: 0, time: 1 });
const density = ref({ mass: 0, volume: 1 });

// Chemistry reactive data
const molarity = ref({ moles: 0, volume: 1 });
const idealGas = ref({ pressure: 1, volume: 1, temperature: 273 });
const ph = ref({ hConcentration: 0.0000001 });
const dilution = ref({ c1: 1, v1: 1, v2: 2 });
const molarMass = ref({ mass: 0, molarMass: 1 });
const percentComp = ref({ elementMass: 0, totalMass: 1 });
const heatCapacity = ref({ mass: 0, specificHeat: 4.18, deltaT: 0 });
const enthalpy = ref({ heat: 0, moles: 1 });

// Mathematics computed properties
const sphereVolume = computed(() => {
    return sphere.value.radius
        ? ((4 / 3) * Math.PI * Math.pow(sphere.value.radius, 3)).toFixed(3)
        : "0.000";
});

const sphereSurfaceArea = computed(() => {
    return sphere.value.radius
        ? (4 * Math.PI * Math.pow(sphere.value.radius, 2)).toFixed(3)
        : "0.000";
});

const cylinderVolume = computed(() => {
    return cylinder.value.radius && cylinder.value.height
        ? (
              Math.PI *
              Math.pow(cylinder.value.radius, 2) *
              cylinder.value.height
          ).toFixed(3)
        : "0.000";
});

const cylinderSurfaceArea = computed(() => {
    return cylinder.value.radius && cylinder.value.height
        ? (
              2 *
              Math.PI *
              cylinder.value.radius *
              (cylinder.value.radius + cylinder.value.height)
          ).toFixed(3)
        : "0.000";
});

const cubeVolume = computed(() => {
    return cube.value.side ? Math.pow(cube.value.side, 3).toFixed(3) : "0.000";
});

const cubeSurfaceArea = computed(() => {
    return cube.value.side
        ? (6 * Math.pow(cube.value.side, 2)).toFixed(3)
        : "0.000";
});

const coneVolume = computed(() => {
    return cone.value.radius && cone.value.height
        ? (
              (1 / 3) *
              Math.PI *
              Math.pow(cone.value.radius, 2) *
              cone.value.height
          ).toFixed(3)
        : "0.000";
});

const coneSurfaceArea = computed(() => {
    if (!cone.value.radius || !cone.value.height) return "0.000";
    const slantHeight = Math.sqrt(
        Math.pow(cone.value.radius, 2) + Math.pow(cone.value.height, 2),
    );
    return (
        Math.PI *
        cone.value.radius *
        (cone.value.radius + slantHeight)
    ).toFixed(3);
});

const rectangleArea = computed(() => {
    return rectangle.value.length && rectangle.value.width
        ? (rectangle.value.length * rectangle.value.width).toFixed(3)
        : "0.000";
});

const rectanglePerimeter = computed(() => {
    return rectangle.value.length && rectangle.value.width
        ? (2 * (rectangle.value.length + rectangle.value.width)).toFixed(3)
        : "0.000";
});

const circleArea = computed(() => {
    return circle.value.radius
        ? (Math.PI * Math.pow(circle.value.radius, 2)).toFixed(3)
        : "0.000";
});

const circleCircumference = computed(() => {
    return circle.value.radius
        ? (2 * Math.PI * circle.value.radius).toFixed(3)
        : "0.000";
});

const quadraticRoots = computed(() => {
    if (!quadratic.value.a) return "a cannot be 0";
    const discriminant =
        Math.pow(quadratic.value.b, 2) -
        4 * quadratic.value.a * quadratic.value.c;
    if (discriminant < 0) return "No real roots";
    if (discriminant === 0) {
        const root = -quadratic.value.b / (2 * quadratic.value.a);
        return `x = ${root.toFixed(3)}`;
    }
    const root1 =
        (-quadratic.value.b + Math.sqrt(discriminant)) /
        (2 * quadratic.value.a);
    const root2 =
        (-quadratic.value.b - Math.sqrt(discriminant)) /
        (2 * quadratic.value.a);
    return `x₁ = ${root1.toFixed(3)}, x₂ = ${root2.toFixed(3)}`;
});

const trigSin = computed(() => {
    return Math.sin((trig.value.angle * Math.PI) / 180).toFixed(4);
});

const trigCos = computed(() => {
    return Math.cos((trig.value.angle * Math.PI) / 180).toFixed(4);
});

const trigTan = computed(() => {
    return Math.tan((trig.value.angle * Math.PI) / 180).toFixed(4);
});

const log10 = computed(() => {
    return logarithm.value.x > 0
        ? Math.log10(logarithm.value.x).toFixed(4)
        : "Invalid";
});

const naturalLog = computed(() => {
    return logarithm.value.x > 0
        ? Math.log(logarithm.value.x).toFixed(4)
        : "Invalid";
});

const logBase = computed(() => {
    return logarithm.value.x > 0 &&
        logarithm.value.base > 0 &&
        logarithm.value.base !== 1
        ? (
              Math.log(logarithm.value.x) / Math.log(logarithm.value.base)
          ).toFixed(4)
        : "Invalid";
});

const exponentialResult = computed(() => {
    return Math.pow(exponential.value.base, exponential.value.exponent).toFixed(
        4,
    );
});

const naturalExponential = computed(() => {
    return Math.exp(exponential.value.exponent).toFixed(4);
});

const factorial = computed(() => {
    const n = Math.floor(combinatorics.value.n);
    if (n < 0 || n > 20) return "Invalid (0-20)";
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result.toString();
});

const permutation = computed(() => {
    const n = Math.floor(combinatorics.value.n);
    const r = Math.floor(combinatorics.value.r);
    if (n < 0 || r < 0 || r > n || n > 20) return "Invalid";
    let result = 1;
    for (let i = n; i > n - r; i--) result *= i;
    return result.toString();
});

const combination = computed(() => {
    const n = Math.floor(combinatorics.value.n);
    const r = Math.floor(combinatorics.value.r);
    if (n < 0 || r < 0 || r > n || n > 20) return "Invalid";
    let numerator = 1;
    let denominator = 1;
    for (let i = 0; i < r; i++) {
        numerator *= n - i;
        denominator *= i + 1;
    }
    return Math.floor(numerator / denominator).toString();
});

// Physics computed properties
const velocityResult = computed(() => {
    return velocity.value.time
        ? (velocity.value.distance / velocity.value.time).toFixed(3)
        : "0.000";
});

const accelerationResult = computed(() => {
    return acceleration.value.time
        ? (
              (acceleration.value.v - acceleration.value.v0) /
              acceleration.value.time
          ).toFixed(3)
        : "0.000";
});

const forceResult = computed(() => {
    return (force.value.mass * force.value.acceleration).toFixed(3);
});

const kineticEnergyResult = computed(() => {
    return (
        0.5 *
        kineticEnergy.value.mass *
        Math.pow(kineticEnergy.value.velocity, 2)
    ).toFixed(3);
});

const potentialEnergyResult = computed(() => {
    return (
        potentialEnergy.value.mass *
        9.81 *
        potentialEnergy.value.height
    ).toFixed(3);
});

const momentumResult = computed(() => {
    return (momentum.value.mass * momentum.value.velocity).toFixed(3);
});

const waveSpeed = computed(() => {
    return (wave.value.frequency * wave.value.wavelength).toFixed(3);
});

const current = computed(() => {
    return ohm.value.resistance
        ? (ohm.value.voltage / ohm.value.resistance).toFixed(3)
        : "0.000";
});

const electricPower = computed(() => {
    return ohm.value.resistance
        ? (
              (ohm.value.voltage * ohm.value.voltage) /
              ohm.value.resistance
          ).toFixed(3)
        : "0.000";
});

const pressureResult = computed(() => {
    return pressure.value.area
        ? (pressure.value.force / pressure.value.area).toFixed(3)
        : "0.000";
});

const powerResult = computed(() => {
    return power.value.time
        ? (power.value.work / power.value.time).toFixed(3)
        : "0.000";
});

const densityResult = computed(() => {
    return density.value.volume
        ? (density.value.mass / density.value.volume).toFixed(3)
        : "0.000";
});

// Chemistry computed properties
const molarityResult = computed(() => {
    return molarity.value.volume
        ? (molarity.value.moles / molarity.value.volume).toFixed(3)
        : "0.000";
});

const idealGasMoles = computed(() => {
    const R = 0.0821; // L⋅atm/(mol⋅K)
    return idealGas.value.temperature
        ? (
              (idealGas.value.pressure * idealGas.value.volume) /
              (R * idealGas.value.temperature)
          ).toFixed(3)
        : "0.000";
});

const phValue = computed(() => {
    return ph.value.hConcentration > 0
        ? (-Math.log10(ph.value.hConcentration)).toFixed(2)
        : "Invalid";
});

const pohValue = computed(() => {
    const phVal =
        ph.value.hConcentration > 0 ? -Math.log10(ph.value.hConcentration) : 0;
    return (14 - phVal).toFixed(2);
});

const finalConcentration = computed(() => {
    return dilution.value.v2
        ? ((dilution.value.c1 * dilution.value.v1) / dilution.value.v2).toFixed(
              3,
          )
        : "0.000";
});

const molesFromMass = computed(() => {
    return molarMass.value.molarMass
        ? (molarMass.value.mass / molarMass.value.molarMass).toFixed(3)
        : "0.000";
});

const percentComposition = computed(() => {
    return percentComp.value.totalMass
        ? (
              (percentComp.value.elementMass / percentComp.value.totalMass) *
              100
          ).toFixed(2)
        : "0.00";
});

const heatTransfer = computed(() => {
    return (
        heatCapacity.value.mass *
        heatCapacity.value.specificHeat *
        heatCapacity.value.deltaT
    ).toFixed(3);
});

const enthalpyChange = computed(() => {
    return enthalpy.value.moles
        ? (enthalpy.value.heat / enthalpy.value.moles).toFixed(3)
        : "0.000";
});
</script>

<style scoped>
.calculation-card {
    transition: all 0.2s ease;
}

.calculation-card:hover {
    transform: translateY(-2px);
}

.result-display {
    background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}

input:focus {
    outline: none;
}
</style>
