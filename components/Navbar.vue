<template>
    <nav class="fixed w-full py-2" id="main-navbar">
        <div class="container max-w-5xl mx-auto flex flex-wrap items-center justify-between px-3">
            <button type="button" class="lg:hidden text-xl">
                <svg viewBox="0 0 24 24" width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="h-6 w-6">
                    <path d="M4 6H20M4 12H20M4 18C5.36683 18 6.13317 18 7.5 18C8.86683 18 11 18 11 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            <NuxtLink to="/" class="py-1.5 mr-4 text-xl">
                <img src="https://kiriminaja.com/assets/atrust/svg-logo-primary.svg" class="w-40" alt="Company Logo">
            </NuxtLink>
            <div class="hidden lg:flex mt-6 lg:mt-0 basis-full lg:basis-auto items-center grow box-border">
                <ul class="flex flex-col lg:flex-row pl-0 mt-0 mb-2 lg:mb-0 ml-auto list-none lg:items-center">
                    <li class="text-black dark:text-white px-0 py-2 lg:py-5 lg:px-[1.15rem] font-medium">
                        <NuxtLink to="/">
                            Beranda
                        </NuxtLink>
                    </li>
                    <li class="text-black dark:text-white px-0 py-2 lg:py-5 lg:px-[1.15rem] font-medium">
                        <NuxtLink to="/">
                            Blog
                        </NuxtLink>
                    </li>
                    <li class="text-black dark:text-white px-0 py-2 lg:py-5 lg:px-[1.15rem] font-medium">
                        <NuxtLink to="/">
                            Kabar
                        </NuxtLink>
                    </li>
                    <li class="text-black dark:text-white px-0 py-2 lg:py-5 lg:px-[1.15rem] font-medium">
                        <NuxtLink to="/">
                            Layanan
                        </NuxtLink>
                    </li>
                    <li class="text-black dark:text-white px-0 py-2 lg:py-5 lg:px-[1.15rem] font-medium">
                        <NuxtLink to="/">
                            Cek Ongkir
                        </NuxtLink>
                    </li>
                    <li class="text-black dark:text-white px-0 py-2 lg:py-5 lg:px-[1.15rem] font-medium">
                        <NuxtLink to="/">
                            Lacak
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <div class="hidden lg:block vertical-space"></div>
                    </li>
                    <li class="text-black dark:text-white px-0 py-2 lg:py-5 lg:px-[1.15rem] font-medium">
                        <NuxtLink to="/">
                            Daftar
                        </NuxtLink>
                    </li>
                    <li class="lg:flex lg:items-center ">
                        <NuxtLink to="/" class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full" style="background-color: #6f2fab;border-color: #6f2fab;">
                            Masuk
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <button type="button" class="lg:hidden text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="icon">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                </svg>
            </button>
        </div>
    </nav>
</template>