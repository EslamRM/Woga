<template>
    <div class="bg-[#333] text-white bg-[url('/images/footer-back.png')] bg-contain bg-no-repeat bg-[center_bottom_3rem]">
        <div class="footer flex flex-col lg:flex-row gap-8 lg:gap-0 justify-around items-center px-8 py-16 mt-4 w-full">
            <div class="flex flex-col items-center lg:items-start justify-center">
                <NuxtLinkLocale to="/">
                    <NuxtImg format="webp" src="/images/flogo.png" class="w-64" />
                </NuxtLinkLocale>
                <p class="mt-3">{{ $t('shorthand') }}</p>
            </div>
            <div class="flex flex-col items-center lg:items-start justify-center gap-2">
                <NuxtLinkLocale to="privacy-policy">
                    <p>{{ $t('privacypolicy1') }} {{ $t('privacypolicy2') }}</p>
                </NuxtLinkLocale>
                <NuxtLinkLocale to="customer-support">
                    <p>{{ $t('customersupport') }} {{ $t('support') }}</p>
                </NuxtLinkLocale>
            </div>
            <div class="flex flex-col items-center lg:items-start justify-center gap-2">
                <p>{{ $t('contactus1') }} {{ $t('contactus2') }}</p>
                <div class="flex items-center justify-center gap-2" dir="ltr">
                    <span>
                        <svg id="Iconly_Bold_Message" data-name="Iconly/Bold/Message" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24">
                            <g id="Message" transform="translate(2 3)">
                                <path id="Message-2" data-name="Message"
                                    d="M14.939,18H5.06A5.061,5.061,0,0,1,0,12.95V5.05A5.061,5.061,0,0,1,5.06,0h9.879a5.091,5.091,0,0,1,3.58,1.481A5.012,5.012,0,0,1,20,5.05v7.9A5.061,5.061,0,0,1,14.939,18ZM4.034,5.246A.733.733,0,0,0,3.5,5.47a.764.764,0,0,0-.071,1l.131.13L8.11,10.15a3.129,3.129,0,0,0,1.95.68,3.18,3.18,0,0,0,1.958-.68L16.53,6.54l.08-.08a.774.774,0,0,0-.012-1,.831.831,0,0,0-.528-.26h-.042a.76.76,0,0,0-.519.2L11,9a1.565,1.565,0,0,1-1,.36A1.592,1.592,0,0,1,9,9L4.5,5.4A.778.778,0,0,0,4.034,5.246Z"
                                    fill="#fff" />
                            </g>
                        </svg>
                    </span>
                    <span>info@woga.app</span>
                </div>
                <div class="flex items-center justify-center gap-2" dir="ltr">
                    <span>
                        <svg id="Iconly_Bold_Calling" data-name="Iconly/Bold/Calling" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24">
                            <g id="Calling" transform="translate(2 2)">
                                <path id="Calling-2" data-name="Calling"
                                    d="M13.12,19.446C8.83,17.655,2.275,11.231.543,6.974-.176,5.389-.182,4.082.531,3.1.815,2.639,2.433.713,3.882.774a1.863,1.863,0,0,1,1.128.59A13.212,13.212,0,0,1,7.258,4.486a2.233,2.233,0,0,1-.422,1.62c-.267.468-.982,1.354-.8,1.871a11.491,11.491,0,0,0,6.093,5.92c.506.184,1.391-.53,1.857-.8a2.211,2.211,0,0,1,1.616-.424,13.422,13.422,0,0,1,3.112,2.293,1.856,1.856,0,0,1,.585,1.121c.054,1.482-1.96,3.174-2.327,3.385a2.822,2.822,0,0,1-1.69.527A5.191,5.191,0,0,1,13.12,19.446ZM14.835,7.931h0a3.461,3.461,0,0,0-2.743-2.75.86.86,0,0,1,.327-1.689,5.175,5.175,0,0,1,4.1,4.11.865.865,0,0,1-.678,1.011.945.945,0,0,1-.166.015A.86.86,0,0,1,14.835,7.931Zm3.456-.075a6.912,6.912,0,0,0-6.126-6.138A.863.863,0,0,1,11.731.184a.818.818,0,0,1,.625-.176,8.617,8.617,0,0,1,7.638,7.656.857.857,0,0,1-.756.95.705.705,0,0,1-.1.006A.856.856,0,0,1,18.291,7.856Z"
                                    transform="translate(0 0)" fill="#fff" />
                            </g>
                        </svg>
                    </span>
                    <span>+966 504377222</span>
                </div>
            </div>
            <div class="flex flex-col items-center lg:items-start justify-center gap-2">
                <p>{{ $t('followus') }}</p>
                <div class="flex justify-center items-center gap-2">
                    <!-- <div>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68 68">
                                <path id="Subtraction_54" data-name="Subtraction 54"
                                    d="M34,68A34.009,34.009,0,0,1,20.766,2.672,34.009,34.009,0,0,1,47.234,65.328,33.786,33.786,0,0,1,34,68ZM25.84,30.05v6.007h5.187V51.471h6.2V36.056H42.4l.775-6.006H37.23V26.214c0-1.755.506-2.924,2.978-2.924h3.181V17.917a42.449,42.449,0,0,0-4.635-.237c-4.766,0-7.727,3.043-7.727,7.941v4.43Z"
                                    fill="#77c36b" />
                            </svg>
                        </a>
                    </div> -->
                    <div>
                        <a href="https://twitter.com/WOGA_APP" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68 68">
                                <path id="Subtraction_53" data-name="Subtraction 53"
                                    d="M34,68A34.009,34.009,0,0,1,20.766,2.672,34.009,34.009,0,0,1,47.234,65.328,33.786,33.786,0,0,1,34,68ZM30.4,38.2h0l9.922,13.266H51.064L36.34,31.785,49.4,17.679H46.24L34.929,29.9,25.791,17.679H15.048L28.987,36.317,14.96,51.471h3.157L30.4,38.206ZM46.42,49.146H41.485L19.69,20h4.935L46.418,49.143Z"
                                    fill="#77c36b" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/woga_app?igsh=M3FoNGFpaXVkam51" target="_blank"
                            rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68 68">
                                <path id="Subtraction_52" data-name="Subtraction 52"
                                    d="M34,68A34.009,34.009,0,0,1,20.766,2.672,34.009,34.009,0,0,1,47.234,65.328,33.786,33.786,0,0,1,34,68Zm2.36-50.32-1.817,0c-4.589.009-5.184.029-6.966.115a12.4,12.4,0,0,0-4.1.793,8.637,8.637,0,0,0-4.933,4.95,12.471,12.471,0,0,0-.777,4.1c-.079,1.8-.1,2.4-.088,6.965s.029,5.159.115,6.967a12.477,12.477,0,0,0,.793,4.1,8.644,8.644,0,0,0,4.951,4.933,12.484,12.484,0,0,0,4.1.777c1.539.069,2.167.091,5.149.091l1.549,0h.267c4.558-.009,5.159-.029,6.967-.115a12.477,12.477,0,0,0,4.1-.793A8.637,8.637,0,0,0,50.6,45.612a12.452,12.452,0,0,0,.777-4.1c.079-1.8.1-2.4.089-6.967s-.029-5.157-.115-6.965a12.5,12.5,0,0,0-.793-4.1,8.637,8.637,0,0,0-4.951-4.931,12.455,12.455,0,0,0-4.1-.777C39.959,17.7,39.327,17.68,36.36,17.68Zm-3.4,30.75c-3,0-3.635-.021-5.189-.088a9.409,9.409,0,0,1-3.138-.574,5.6,5.6,0,0,1-3.213-3.2,9.468,9.468,0,0,1-.588-3.137c-.085-1.812-.1-2.352-.11-6.827-.009-4.517.008-5.051.086-6.827a9.365,9.365,0,0,1,.574-3.137,5.6,5.6,0,0,1,3.2-3.213,9.366,9.366,0,0,1,3.136-.588c1.762-.084,2.293-.1,6.826-.111H36.39c2.873,0,3.485.021,4.987.087a9.292,9.292,0,0,1,3.137.575,5.6,5.6,0,0,1,3.213,3.2,9.276,9.276,0,0,1,.588,3.135c.086,1.808.1,2.346.113,6.826.009,4.525-.008,5.058-.087,6.827a9.362,9.362,0,0,1-.574,3.14,5.6,5.6,0,0,1-3.2,3.213,9.373,9.373,0,0,1-3.135.588c-1.813.085-2.352.1-6.827.111ZM34.577,25.9h-.018a8.676,8.676,0,0,0,.017,17.351h.016A8.676,8.676,0,0,0,34.577,25.9Zm9-2.389h0A2.026,2.026,0,1,0,45.6,25.536a2.016,2.016,0,0,0-2.031-2.023Zm-9,16.7a5.632,5.632,0,0,1-.011-11.263h.012a5.632,5.632,0,0,1,.01,11.263Z"
                                    fill="#77c36b" />
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/woga-app/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 68 68">
                                <path id="Subtraction_55" data-name="Subtraction 55"
                                    d="M34,68A34.009,34.009,0,0,1,20.765,2.672,34.009,34.009,0,0,1,47.234,65.328,33.792,33.792,0,0,1,34,68Zm5.187-34.054c3.011,0,3.011,2.857,3.011,4.944v9.066h5.791V37.73c0-4.613-.842-8.881-6.948-8.881A6.132,6.132,0,0,0,35.55,31.86h-.077V29.31H29.914V47.956h5.793V38.734C35.707,36.367,36.12,33.946,39.185,33.946ZM20.473,29.31V47.956h5.8V29.31Zm2.9-9.265A3.36,3.36,0,1,0,26.735,23.4,3.366,3.366,0,0,0,23.378,20.045Z"
                                    fill="#77c36b" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-sm text-center py-3">© 2024 All rights reserved to WOGA</div>
    </div>
</template>
<script>

export default {
    name: "Footer",
    props: ["head"],

};
</script>