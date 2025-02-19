<template>
    <div class="my-11 mx-8">
        <div class="text-center text-2xl">
            <h2>{{ $t('privacypolicy1') }} <span class="text-secondary">{{ $t('privacypolicy2') }}</span></h2>
            <p class="text-xl font-bold mt-5">{{ $t('privacydesc') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('usertermstitle') }}</p>
            <p class="mt-5 text-base">{{ $t('usertermsdesc') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('aboutwogatitle') }}</p>
            <p class="mt-5 text-base">{{ $t('aboutwogadesc') }}</p>
        </div>
        <div class="mt-5 text-base">
            <p class="text-lg">{{ $t('definationtitle') }}</p>
            <p class="mt-5">{{ $t('defdesc') }}</p>
            <ol class="flex flex-col gap-3 mt-3">
                <li>{{ $t('deflist1') }}</li>
                <li>{{ $t('deflist2') }}</li>
                <li>{{ $t('deflist3') }}</li>
                <li>{{ $t('deflist4') }}</li>
                <li>{{ $t('deflist5') }}</li>
                <li>{{ $t('deflist6') }}</li>
                <li>{{ $t('deflist7') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('termstitle') }}</p>
            <p class="mt-5 text-base">{{ $t('termsdesc') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('useroblig') }}</p>
            <p class="mt-5 text-base">{{ $t('userobligdesc1') }}</p>
            <p class="mt-5 text-base">{{ $t('userobligdesc2') }}</p>
            <p class="mt-5 text-base">{{ $t('userobligdesc3') }}</p>
            <p class="mt-5 text-base">{{ $t('userobligdesc4') }}</p>
            <p class="mt-5 text-base">{{ $t('userobligdesc5') }}</p>
            <p class="mt-5 text-base">{{ $t('userobligdesc6') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-2 mx-3">
                <li>{{ $t('userobligdesc6desc1') }}</li>
                <li>{{ $t('userobligdesc6desc2') }}</li>
                <li>{{ $t('userobligdesc6desc3') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('amedmenttitle') }}</p>
            <p class="mt-5 text-base">{{ $t('amedmentdesc1') }}</p>
            <p class="mt-5 text-base">{{ $t('amedmentdesc2') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('intelltitle') }}</p>
            <p class="mt-5 text-base">{{ $t('intelldesc') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('pricetitle') }}</p>
            <p class="mt-5 text-base">{{ $t('pricedesc1') }}</p>
            <p class="mt-5 text-base">{{ $t('pricedesc2') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('paymenttitle') }}</p>
            <p class="mt-5 text-base">{{ $t('paymentdesc1') }}</p>
            <p class="mt-5 text-base">{{ $t('paymentdesc2') }}</p>
            <p class="mt-5 text-base">{{ $t('paymentdesc3') }}</p>
            <p class="mt-5 text-base">{{ $t('paymentdesc4') }}</p>
            <p class="mt-5 text-base">{{ $t('paymentdesc5') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('shippingtitle') }}</p>
            <p class="mt-5 text-base">{{ $t('shippingdesc1') }}</p>
            <p class="mt-5 text-base">{{ $t('shippingdesc2') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('refundtitle') }}</p>
            <p class="mt-5 text-base">{{ $t('refunddesc') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('returntitle') }}</p>
            <p class="mt-5 text-base">{{ $t('returndesc1') }}</p>
            <p class="mt-5 text-base">{{ $t('returndesc2') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('returndesc21') }}</li>
                <li>{{ $t('returndesc22') }}</li>
                <li>{{ $t('returndesc23') }}</li>
                <li>{{ $t('returndesc24') }}</li>
            </ol>
            <p class="mt-5 text-base">{{ $t('returndesc3') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('returnprodtitle') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('returnproddesc1') }}</li>
                <li>{{ $t('returnproddesc2') }}</li>
                <li>{{ $t('returnproddesc3') }}</li>
                <li>{{ $t('returnproddesc4') }}</li>
                <li>{{ $t('returnproddesc5') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('canceltitle') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('canceldesc1') }}</li>
                <li>{{ $t('canceldesc2') }}</li>
                <li>{{ $t('canceldesc3') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('plattitle') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('platdesc1') }}</li>
                <li>{{ $t('platdesc2') }}</li>
                <li>{{ $t('platdesc3') }}</li>
                <li>{{ $t('platdesc4') }}</li>
                <li>{{ $t('platdesc5') }}</li>
                <li>{{ $t('platdesc6') }}</li>
                <li>{{ $t('platdesc7') }}</li>
                <li>{{ $t('platdesc8') }}</li>
                <li>{{ $t('platdesc9') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('limittitle') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('limitdesc1') }}</li>
                <li>{{ $t('limitdesc2') }}</li>
                <li>{{ $t('limitdesc3') }}</li>
                <li>{{ $t('limitdesc4') }}</li>
                <li>{{ $t('limitdesc5') }}</li>
                <li>{{ $t('limitdesc6') }}</li>
                <li>{{ $t('limitdesc7') }}</li>
                <li>{{ $t('limitdesc8') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('socialtitle') }}</p>
            <p class="mt-5 text-base">{{ $t('socialdesc') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('socialdesc1') }}</li>
                <li>{{ $t('socialdesc2') }}</li>
                <li>{{ $t('socialdesc3') }}</li>
                <li>{{ $t('socialdesc4') }}</li>
                <li>{{ $t('socialdesc5') }}</li>
                <li>{{ $t('socialdesc6') }}</li>
                <li>{{ $t('socialdesc7') }}</li>
                <li>{{ $t('socialdesc8') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('relationtitle') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('relationdesc1') }}</li>
                <li>{{ $t('relationdesc2') }}</li>
                <li>{{ $t('relationdesc3') }}</li>
                <li>{{ $t('relationdesc4') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('suspentitle') }}</p>
            <p class="mt-5 text-base">{{ $t('suspendesc1') }}</p>
            <p class="mt-5 text-base">{{ $t('suspendesc2') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('confidtitle') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('confiddesc1') }}</li>
                <li>{{ $t('confiddesc2') }}</li>
                <li>{{ $t('confiddesc3') }}</li>
                <li>{{ $t('confiddesc4') }}</li>
                <li>{{ $t('confiddesc5') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('damagetitle') }}</p>
            <p class="mt-5 text-base">{{ $t('damagedesc') }}</p>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('generaltitle') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('generaldesc1') }}</li>
                <li>{{ $t('generaldesc2') }}</li>
                <li>{{ $t('generaldesc3') }}</li>
                <li>{{ $t('generaldesc4') }}</li>
                <li>{{ $t('generaldesc5') }}</li>
            </ol>
        </div>
        <div class="mt-5 text-lg">
            <p>{{ $t('commtitle') }}</p>
            <p class="mt-5 text-base">{{ $t('commdesc1') }}</p>
            <ol class="mt-5 text-base flex flex-col gap-3 mx-3">
                <li>{{ $t('commdesc2') }}  info@woga.app</li>
                <li>{{ $t('commdesc3') }}</li>
                <li>{{ $t('commdesc4') }}</li>
            </ol>
            <p class="mt-5 text-base">{{ $t('commdesc5') }}  info@woga.app</p>
            <p class="mt-5 text-base">{{ $t('commdesc6') }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: "Privacy Policy"
}
</script>