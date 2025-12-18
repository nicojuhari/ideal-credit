<script setup lang="ts">
import { ref, computed } from "vue";
import type { FormError, FormSubmitEvent } from "@nuxt/ui";
import { form, type formField } from "#build/ui";

const { trackEvent } = useFacebookPixel();

const emptyFormData = {
    suma: "",
    termen: "",
    scopul_creditului: "",
    nume: "",
    prenume: "",
    adresa_domiciliu: "",
    telefon: "",
    venituri: "",
    datorii: "",
    locul_de_munca: "",
    bunuri: [] as string[],
    terms: false,
    have_garant: undefined,
    in_oficiu: undefined,
    subject: "",
    from_name: "Cerere de Credit Online",
};

const formData = ref({ ...emptyFormData });

const steps = [
    {
        label: "Date despre credit",
        fields: ["suma", "termen", "scopul_creditului"],
    },
    {
        label: "Date personale",
        fields: ["nume", "prenume", "adresa_domiciliu", "telefon"],
    },
    {
        label: "Date financiare",
        fields: ["venituri", "datorii", "locul_de_munca", "bunuri"],
    },
    {
        label: "Declarații",
        fields: ["terms", "venit_garant", "in_oficiu"],
    },
];

const currentStep = ref(0);
const isFirstStep = computed(() => currentStep.value === 0);
const isLastStep = computed(() => currentStep.value === steps.length - 1);

const stepErrors = ref<FormError[]>([]);

function validateStep() {
    const fields = steps[currentStep.value]?.fields ?? [];
    const allErrors = validate(formData.value);
    // Only show errors for fields in this step
    return allErrors.filter((e) => e.name && fields.includes(e.name));
}

function nextStep() {
    stepErrors.value = validateStep();
    if (stepErrors.value.length === 0 && currentStep.value < steps.length - 1) {
        currentStep.value++;
        stepErrors.value = [];
    }
}
function prevStep() {
    if (currentStep.value > 0) {
        currentStep.value--;
        stepErrors.value = [];
    }
}

const progressValues = computed(() => {
    return (currentStep.value / steps.length) * 100 || 0;
});
const formSuccess = ref(false);
const formError = ref(false);

useHead({
    title: "Cerere de Credit Online | Rapid și Simplu | Ideal Credit",
    titleTemplate: "%pageTitle",
    meta: [
        {
            name: "description",
            content:
                "Completează cererea de credit online la Ideal Credit. Decizie în 1 - 3 ore, documentație minimă și consultanță gratuită. Primești banii rapid!",
        },
        { name: "keywords", content: "cerere de credit, credite rapide, credite Moldova, credite Chișinău, credite online, împrumuturi" },
    ],
});

const loading = ref(false);

const validate = (state: any): FormError[] => {
    const errors = [];
    if (!state.suma) errors.push({ name: "suma", message: "Suma este obligatorie" });
    if (!onlyNumbers(state.suma)) errors.push({ name: "suma", message: "Suma trebuie să conțină doar cifre" });
    if (state.suma < 10000) errors.push({ name: "suma", message: "Suma minimă este 10.000 MDL" });
    if (state.suma > 300000) errors.push({ name: "suma", message: "Suma maximă este 300.000 MDL" });

    if (!state.termen) errors.push({ name: "termen", message: "Termenul este obligatoriu" });
    if (!onlyNumbers(state.termen)) errors.push({ name: "termen", message: "Termenul trebuie să conțină doar cifre" });
    if (state.termen < 6) errors.push({ name: "termen", message: "Termenul minim este 6 luni" });
    if (state.termen > 60) errors.push({ name: "termen", message: "Termenul maxim este 60 luni" });

    if (!state.scopul_creditului) errors.push({ name: "scopul_creditului", message: "Scopul creditului este obligatoriu" });

    if (!state.nume || state.nume.length < 3) errors.push({ name: "nume", message: "Nume este obligatoriu" });
    if (!state.prenume || state.prenume.length < 3) errors.push({ name: "prenume", message: "Prenume este obligatoriu" });
    if (!state.adresa_domiciliu || state.adresa_domiciliu.length < 3)
        errors.push({ name: "adresa_domiciliu", message: "Adresa de rezidență este obligatorie" });
    if (!state.telefon) errors.push({ name: "telefon", message: "Telefon este obligatoriu" });
    if (!validatePhone(state.telefon)) errors.push({ name: "telefon", message: "Telefonul trebuie să conțină 9 cifre" });

    if (!onlyNumbers(state.venituri)) errors.push({ name: "venituri", message: "Venitul trebuie să conțină doar cifre" });
    if (!onlyNumbers(state.datorii)) errors.push({ name: "datorii", message: "Datoriile trebuie să conțină doar cifre sau să fie 0" });

    if (state.locul_de_munca.length < 3)
        errors.push({ name: "locul_de_munca", message: "Locul de muncă trebuie să conțină cel puțin 3 caractere" });

    if (state.bunuri.length === 0) errors.push({ name: "bunuri", message: "Acest câmp este obligatoriu" });

    if (!state.terms) errors.push({ name: "terms", message: "Acceptați condițiile." });
    if (state.have_garant !== true) errors.push({ name: "have_garant", message: "Este necesar cel puțin un fidejusor." });
    if (state.in_oficiu !== true) errors.push({ name: "in_oficiu", message: "Prezența în oficiu este obligatorie." });

    return errors;
};

const submitForm = async () => {
    currentStep.value++;
    loading.value = true;
    formError.value = false;
    formSuccess.value = false;

    try {
        formData.value.subject = formData.value.suma + " MDL, " + formData.value.termen + " luni, " + formData.value.nume;

        let response = await $fetch("/api/cerere-online", {
            method: "POST",
            body: JSON.stringify(formData.value),
        });

        if (response.success) {
            trackEvent("Lead");

            setTimeout(() => {
                // formSend.value = false;
                formData.value = {
                    ...emptyFormData,
                };
                formSuccess.value = true;
                currentStep.value = 0;
            }, 1200);
        }
    } catch (e) {
        console.error(e);
        formError.value = true;
    } finally {
        setTimeout(() => {
            // formSend.value = false;
            loading.value = false;
        }, 1000);
    }
};

onMounted(() => {
    trackEvent("ViewContent");
});
</script>
<template>
    <div class="container relative my-4 md:my-6">
        <h1 class="card-title text-center pt-4 !mb-4">Cerere de credit online</h1>
        <div class="max-w-md mx-auto card">
            <!-- Progress bar / Steps -->
            <div class="p-4 border rounded bg-black-300/40 border-white/5">
                <UProgress v-model="progressValues" status animation="carousel" />
                <p class="mt-1.5 text-xs text-center text-brand-500">4 etape, completezi cererea în 2 minute</p>
            </div>

            <Transition name="fade-slide" mode="out-in">
                <UForm :key="currentStep" class="mt-8">
                    <!-- Step 1: Date despre credit -->
                    <div v-if="currentStep === 0">
                        <h2 class="mb-6 text-green-400 text-center font-bold text-xl">1. Date despre credit</h2>
                        <div class="space-y-6 md:space-y-8">
                            <UFormField label="Suma (lei)" name="suma" hint="Minim 10000 lei">
                                <UInput type="number" step="100" max="300000" min="10000" v-model="formData.suma" />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'suma')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "suma")?.message }}
                                </div>
                            </UFormField>
                            <UFormField label="Termen (luni)" name="termen" hint="Minim 6 luni, maxim 60 luni">
                                <UInput type="number" step="1" min="6" max="60" v-model="formData.termen" />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'termen')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "termen")?.message }}
                                </div>
                            </UFormField>
                            <UFormField label="Scopul creditului" name="scopul_creditului">
                                <USelect
                                    v-model="formData.scopul_creditului"
                                    placeholder="Selectează scopul creditului"
                                    :items="['Pentru nevoi personale', 'Pentru afaceri', 'Refinanțare', 'Procurare bun imobil', 'Altele']"
                                    class="w-full form-select"
                                />
                                <div
                                    v-if="stepErrors.find((e: FormError) => e.name === 'scopul_creditului')"
                                    class="text-red-500 text-xs mt-1"
                                >
                                    {{ stepErrors.find((e: FormError) => e.name === "scopul_creditului")?.message }}
                                </div>
                            </UFormField>
                        </div>
                    </div>

                    <!-- Step 2: Date personale -->
                    <div v-if="currentStep === 1">
                        <h2 class="mb-6 text-green-400 text-center font-bold text-xl">2. Date personale</h2>
                        <div class="space-y-6 md:space-y-8">
                            <UFormField label="Nume" name="nume">
                                <UInput type="text" v-model="formData.nume" />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'nume')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "nume")?.message }}
                                </div>
                            </UFormField>
                            <UFormField label="Prenume" name="prenume">
                                <UInput type="text" v-model="formData.prenume" />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'prenume')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "prenume")?.message }}
                                </div>
                            </UFormField>
                            <UFormField label="Adresa de reședință" name="adresa_domiciliu">
                                <UInput type="text" v-model="formData.adresa_domiciliu" placeholder="Oraș/Sat, strada, număr/apartament." />
                                <div
                                    v-if="stepErrors.find((e: FormError) => e.name === 'adresa_domiciliu')"
                                    class="text-red-500 text-xs mt-1"
                                >
                                    {{ stepErrors.find((e: FormError) => e.name === "adresa_domiciliu")?.message }}
                                </div>
                            </UFormField>
                            <UFormField label="Telefon mobil" name="telefon" hint="doar din 9 cifre">
                                <UInput type="tel" v-model="formData.telefon" maxlength="9" />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'telefon')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "telefon")?.message }}
                                </div>
                            </UFormField>
                        </div>
                    </div>

                    <!-- Step 3: Date financiare -->
                    <div v-if="currentStep === 2">
                        <h3 class="mb-6 text-green-400 text-center font-bold text-xl">3. Date financiare</h3>
                        <div class="space-y-6 md:space-y-8">
                            <UFormField
                                label="Venit lunar, oficial sau confirmat (lei)"
                                name="venituri"
                                help="Salariu, transferuri regulate, salariu de peste hotare, ..."
                            >
                                <UInput type="number" v-model="formData.venituri" min="0" />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'venituri')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "venituri")?.message }}
                                </div>
                            </UFormField>
                            <UFormField label="Achitări lunare pentru alte credite" name="datorii" help="Dacă nu ai, pune 0">
                                <UInput type="number" v-model="formData.datorii" min="0" />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'datorii')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "datorii")?.message }}
                                </div>
                            </UFormField>

                            <UFormField label="Locul de muncă" name="locul_de_munca" help="Compania și funcția">
                                <UInput type="text" v-model="formData.locul_de_munca" />
                                <div
                                    v-if="stepErrors.find((e: FormError) => e.name === 'locul_de_munca')"
                                    class="text-red-500 text-xs mt-1"
                                >
                                    {{ stepErrors.find((e: FormError) => e.name === "locul_de_munca")?.message }}
                                </div>
                            </UFormField>
                            <UFormField label="Aveți careva bunuri imobile în proprietate?" name="bunuri">
                                <UCheckboxGroup
                                    color="success"
                                    variant="card"
                                    required
                                    v-model="formData.bunuri"
                                    :items="[
                                        'Casă sau Apartament',
                                        'Terenuri (agricole sau pentru construcție)',
                                        'Garaj, cameră în cămin, altele ...',
                                        'Nu am nimic',
                                    ]"
                                    class="mt-2"
                                />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'bunuri')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "bunuri")?.message }}
                                </div>
                            </UFormField>
                        </div>
                    </div>

                    <!-- Step 4: Declarații -->
                    <div v-if="currentStep === 3">
                        <h3 class="mb-6 text-green-400 text-center font-bold text-xl">3. Declarații</h3>
                        <div class="space-y-4 md:space-y-8">
                            <UFormField
                                label="Sunt gata să ofer unul sau mai mulți fidejusori (garant/поручитель)."
                                name="have_garant"
                                class="text-lg !text-red-500"
                            >
                                <URadioGroup
                                    class="mt-2 opacity-80"
                                    variant="card"
                                    orientation="horizontal"
                                    v-model="formData.have_garant"
                                    @change="validateStep"
                                    :color="
                                        formData.have_garant === true ? 'success' : formData.have_garant === false ? 'error' : 'neutral'
                                    "
                                    :items="[
                                        {
                                            label: 'Da',
                                            value: true,
                                        },
                                        {
                                            label: 'Nu',
                                            value: false,
                                        },
                                    ]"
                                />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'have_garant')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "have_garant")?.message }}
                                </div>
                            </UFormField>
                            <UFormField
                                label="În caz de aprobare, voi veni (împreună cu fidejusorii) în oficiul companiei, pentru a semna contractul de credit."
                                name="in_oficiu"
                                class="text-lg"
                            >
                                <URadioGroup
                                    class="mt-2 opacity-80"
                                    variant="card"
                                    @change="validateStep"
                                    orientation="horizontal"
                                    v-model="formData.in_oficiu"
                                    :color="formData.in_oficiu === true ? 'success' : formData.in_oficiu === false ? 'error' : 'neutral'"
                                    :items="[
                                        {
                                            label: 'Da',
                                            value: true,
                                        },
                                        {
                                            label: 'Nu',
                                            value: false,
                                        },
                                    ]"
                                />
                                <div v-if="stepErrors.find((e: FormError) => e.name === 'in_oficiu')" class="text-red-500 text-xs mt-1">
                                    {{ stepErrors.find((e: FormError) => e.name === "in_oficiu")?.message }}
                                </div>
                            </UFormField>
                            <div>
                                <ul class="list-disc list-inside space-y-1 text-blue-400">
                                    <li>Înțeleg că aceasta este o cerere de credit online preventivă, fără caracter obligatoriu.</li>
                                    <li>
                                        În cazul refuzului de acordare a creditului, Ideal Credit SRL nu este obligată să argumenteze
                                        motivul acelui refuz.
                                    </li>
                                </ul>
                                <UFormField name="terms" class="mt-4">
                                    <UCheckbox
                                        variant="card"
                                        v-model="formData.terms"
                                        color="success"
                                        required
                                        label="Accept declarațiile de mai sus."
                                    />
                                    <div v-if="stepErrors.find((e: FormError) => e.name === 'terms')" class="text-red-500 text-xs mt-1">
                                        {{ stepErrors.find((e: FormError) => e.name === "terms")?.message }}
                                    </div>
                                </UFormField>
                            </div>
                        </div>
                    </div>
                </UForm>
            </Transition>

            <!-- Navigation Buttons -->
            <div class="flex justify-between mt-8">
                <UButton v-if="!isFirstStep" icon="ph-arrow-left" @click.prevent="prevStep" color="neutral" label="Înapoi" />

                <UButton
                    v-if="!isLastStep"
                    trailing-icon="ph-arrow-right"
                    class="ml-auto"
                    @click.prevent="nextStep"
                    color="success"
                    label="Continuă"
                />
                <UButton
                    v-else
                    @click="() => submitForm()"
                    :loading="loading"
                    :disabled="loading || validate(formData).length > 0"
                    color="success"
                    class="ml-auto"
                    label="Trimite cererea"
                />
            </div>

            <UiLoading v-if="loading" local />
            <UModal v-model:open="formSuccess" title="Cerere trimisă cu succes!">
                <template #body>
                    <div class="space-y-4 text-center">
                        <div class="flex justify-center">
                            <UIcon name="i-ph-check-circle" class="text-green-500 text-9xl" />
                        </div>
                        <p class="text-lg">Revenim cu un apel în cel mult 3 ore <br class="hidden md:block" />(Luni - Vineri).</p>
                    </div>
                </template>
            </UModal>
            <UModal v-model:open="formError" class="text-black-950" title="Eroare">
                <template #body>
                    <div class="space-y-4">
                        <div class="flex justify-center">
                            <UIcon name="i-ph-warning" class="text-red-500 text-9xl" />
                        </div>
                        <div>Vă rugăm să verificați datele introduse și să încercați din nou.</div>
                    </div>
                </template>
            </UModal>
        </div>
    </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.4s, transform 0.4s;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(24px);
}
.fade-slide-leave-from,
.fade-slide-enter-to {
    opacity: 1;
    transform: translateY(0);
}
</style>
