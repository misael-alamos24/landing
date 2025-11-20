import './styles.css';
import React, { useState } from "react";

export function App () {

  let [comp, setComp] = useState(()=>'');
  let array = ['LandingMinimalista', 'LandingLocal', 'LandingVentas', 'LandingCompleta'];
  let object = {LandingMinimalista, LandingLocal, LandingVentas, LandingCompleta};

  console.log(typeof comp, {comp})
  return <div>
    <div>
      <button onClick={()=>setComp(object[array[0]])}>{array[0]}</button>
      <button onClick={()=>setComp(object[array[1]])}>{array[1]}</button>
      <button onClick={()=>setComp(object[array[2]])}>{array[2]}</button>
      <button onClick={()=>setComp(object[array[3]])}>{array[3]}</button>
    </div>
    <div>
      {comp}
    </div>
  </div>

}



// ============ TEMPLATE A — Minimalista Premium ============
// export function LandingMinimalista () {
//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       <header className="py-10 text-center">
//         <h1 className="text-4xl font-bold">Tu landing page profesional en 48 horas</h1>
//         <p className="text-lg mt-3">Diseño premium, rápido y entrado en la conversión.</p>
//       </header>

//       <section className="max-w-3xl mx-auto px-4 py-10">
//         <h2 className="text-2xl font-semibold mb-4">¿Cuál es el problema?</h2>
//         <p>
//           Si tus clientes no te encuentran online, no existís. Tus competidores ya están 
//           captando contactos. Vos podés hacerlo también, sin complicarte.
//         </p>
//       </section>

//       <section className="max-w-3xl mx-auto px-4 py-10 grid gap-4">
//         <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
//         <ul className="grid gap-2">
//           <li>✔ Página rápida, clara y persuasiva</li>
//           <li>✔ Optimizada para convertir clientes</li>
//           <li>✔ Integración con WhatsApp</li>
//           <li>✔ Entrega en 48h</li>
//         </ul>
//       </section>

//       <section className="max-w-3xl mx-auto px-4 py-10">
//         <h2 className="text-2xl font-semibold mb-4">Lo que recibís</h2>
//         <ul className="grid gap-2">
//           <li>✔ Landing 100% personalizada</li>
//           <li>✔ Copy incluido</li>
//           <li>✔ Diseño moderno adaptable</li>
//           <li>✔ Soporte posterior</li>
//         </ul>
//       </section>

//       <section className="text-center py-10">
//         <a className="bg-black text-white px-6 py-3 rounded-xl" href="#">Quiero mi landing en 48h</a>
//       </section>
//     </div>
//   );
// };


// // ============ TEMPLATE B — Negocio Local Rápido ============
// export function LandingLocal () {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <div className="bg-gray-900 text-white py-12 px-6 text-center">
//         <h1 className="text-4xl font-bold">Landing para negocios locales</h1>
//         <p className="text-lg mt-2">Incrementá consultas y visitas a tu negocio en 48h.</p>
//         <a className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl" href="#">
//           Contactar por WhatsApp
//         </a>
//       </div>

//       <section className="max-w-4xl mx-auto px-4 py-10 grid gap-6">
//         <h2 className="text-2xl font-bold">Beneficios</h2>
//         <ul className="grid gap-2">
//           <li>✔ Ideal para comercios y servicios</li>
//           <li>✔ Enfocada en llamados y reservas</li>
//           <li>✔ Rápida y efectiva</li>
//         </ul>
//       </section>

//       <section className="max-w-4xl mx-auto px-4 py-10">
//         <h2 className="text-2xl font-bold mb-4">Lo que incluye</h2>
//         <ul className="grid gap-2">
//           <li>✔ Imagen del local o negocio</li>
//           <li>✔ CTA directo a WhatsApp</li>
//           <li>✔ Diseño amigable y simple</li>
//         </ul>
//       </section>

//       <section className="text-center py-10">
//         <a className="bg-black text-white px-6 py-3 rounded-xl" href="#">Quiero mi landing</a>
//       </section>
//     </div>
//   );
// };


// // ============ TEMPLATE C — Página de Ventas Directa ============
// export function LandingVentas () {
//   return (
//     <div className="min-h-screen bg-white text-gray-900">
//       <header className="bg-blue-600 text-white py-12 text-center">
//         <h1 className="text-4xl font-bold">Vendé más con una landing directa y efectiva</h1>
//         <p className="mt-3 text-lg">Diseñada para llevar a tus clientes a la acción.</p>
//       </header>

//       <section className="max-w-3xl mx-auto px-4 py-10">
//         <h2 className="text-2xl font-semibold mb-4">Beneficios principales</h2>
//         <ul className="grid gap-2">
//           <li>✔ Hero con oferta clara</li>
//           <li>✔ Sección de beneficios con íconos</li>
//           <li>✔ Prueba social opcional</li>
//           <li>✔ CTA fuerte al inicio y final</li>
//         </ul>
//       </section>

//       <section className="max-w-3xl mx-auto px-4 py-10">
//         <h2 className="text-2xl font-semibold mb-4">Lo que incluye</h2>
//         <ul className="grid gap-2">
//           <li>✔ Página lista para vender</li>
//           <li>✔ Copy profesional</li>
//           <li>✔ Integración con WhatsApp / checkout</li>
//         </ul>
//       </section>

//       <section className="text-center py-10">
//         <a className="bg-blue-600 text-white px-6 py-3 rounded-xl" href="#">Quiero vender más</a>
//       </section>
//     </div>
//   );
// };


//___

// ============ TEMPLATE A — Minimalista Premium ============
export const LandingMinimalista = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold">Tu landing page profesional en 48 horas</h1>
        <p className="text-lg mt-3">Diseño premium, rápido y centrado en la conversión.</p>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">¿Cuál es el problema?</h2>
        <p>
          Si tus clientes no te encuentran online, no existís. Tus competidores ya están 
          captando contactos. Vos podés hacerlo también, sin complicarte.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10 grid gap-4">
        <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
        <ul className="grid gap-2">
          <li>✔ Página rápida, clara y persuasiva</li>
          <li>✔ Optimizada para convertir clientes</li>
          <li>✔ Integración con WhatsApp</li>
          <li>✔ Entrega en 48h</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Lo que recibís</h2>
        <ul className="grid gap-2">
          <li>✔ Landing 100% personalizada</li>
          <li>✔ Copy incluido</li>
          <li>✔ Diseño moderno adaptable</li>
          <li>✔ Soporte posterior</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <a className="bg-black text-white px-6 py-3 rounded-xl" href="#">Quiero mi landing en 48h</a>
      </section>
    </div>
  );
};


// ============ TEMPLATE B — Negocio Local Rápido ============
export const LandingLocal = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="bg-gray-900 text-white py-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Landing para negocios locales</h1>
        <p className="text-lg mt-2">Incrementá consultas y visitas a tu negocio en 48h.</p>
        <a className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl" href="#">
          Contactar por WhatsApp
        </a>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-10 grid gap-6">
        <h2 className="text-2xl font-bold">Beneficios</h2>
        <ul className="grid gap-2">
          <li>✔ Ideal para comercios y servicios</li>
          <li>✔ Enfocada en llamados y reservas</li>
          <li>✔ Rápida y efectiva</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Lo que incluye</h2>
        <ul className="grid gap-2">
          <li>✔ Imagen del local o negocio</li>
          <li>✔ CTA directo a WhatsApp</li>
          <li>✔ Diseño amigable y simple</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <a className="bg-black text-white px-6 py-3 rounded-xl" href="#">Quiero mi landing</a>
      </section>
    </div>
  );
};


// ============ TEMPLATE C — Página de Ventas Directa ============
export const LandingVentas = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-600 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Vendé más con una landing directa y efectiva</h1>
        <p className="mt-3 text-lg">Diseñada para llevar a tus clientes a la acción.</p>
      </header>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Beneficios principales</h2>
        <ul className="grid gap-2">
          <li>✔ Hero con oferta clara</li>
          <li>✔ Sección de beneficios con íconos</li>
          <li>✔ Prueba social opcional</li>
          <li>✔ CTA fuerte al inicio y final</li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Lo que incluye</h2>
        <ul className="grid gap-2">
          <li>✔ Página lista para vender</li>
          <li>✔ Copy profesional</li>
          <li>✔ Integración con WhatsApp / checkout</li>
        </ul>
      </section>

      <section className="text-center py-10">
        <a className="bg-blue-600 text-white px-6 py-3 rounded-xl" href="#">Quiero vender más</a>
      </section>
    </div>
  );
};


// ============ TEMPLATE D — Modelo Completo con Todas las Secciones ============
export const LandingCompleta = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header className="py-16 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Tu landing page profesional en 48 horas</h1>
        <p className="text-lg text-gray-600">
          Diseñada para vender más desde el primer día. Ideal para negocios locales y servicios que necesitan clientes YA.
        </p>
      </header>

      {/* PROBLEMA */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">¿Cuál es el problema?</h2>
        <p className="text-gray-700 leading-relaxed">
          Si tus clientes no te encuentran online, simplemente no existís para ellos. Hoy tus competidores están captando contactos todos los días con páginas optimizadas. Vos también podés hacerlo sin gastar fortunas ni esperar semanas.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Beneficios</h2>
        <ul className="grid gap-3 text-gray-700">
          <li>✔ Página rápida, clara y diseñada para vender</li>
          <li>✔ Integración directa a WhatsApp</li>
          <li>✔ Optimizada para conversión</li>
          <li>✔ Diseño moderno y profesional</li>
          <li>✔ Adaptada a celulares</li>
          <li>✔ Entrega garantizada en solo 48 horas</li>
        </ul>
      </section>

      {/* LO QUE RECIBÍS */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Lo que recibís</h2>
        <ul className="grid gap-3 text-gray-700">
          <li>✔ Landing 100% personalizada</li>
          <li>✔ Copywriting profesional incluido</li>
          <li>✔ Integración con WhatsApp, redes y Google Maps</li>
          <li>✔ Analíticas de visitas opcional</li>
          <li>✔ Soporte posterior</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-4">Proceso de trabajo</h2>
        <ol className="grid gap-3 text-gray-700 list-decimal pl-6">
          <li>Me contás sobre tu negocio</li>
          <li>Armo el diseño y el copy inicial</li>
          <li>Preview en menos de 24 horas</li>
          <li>Revisión y ajustes</li>
          <li>Entrega final en 48h y publicación online</li>
        </ol>
      </section>

      {/* CTA FUERTE */}
      <section className="text-center py-14 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold mb-4">Empezá hoy mismo</h2>
        <p className="mb-6">Hablemos ahora y tené tu página lista en 48h.</p>
        <a href="#" className="bg-white text-black px-8 py-3 rounded-xl font-semibold">
          Quiero mi landing en 48h
        </a>
      </section>

      {/* GARANTÍA */}
      <section className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Garantía</h2>
        <p className="text-gray-700">
          Si la página no te convence, no pagás. Así de simple.
        </p>
      </section>

      {/* PRECIO */}
      <section className="max-w-3xl mx-auto px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Precio</h2>
        <p className="text-3xl font-bold mb-4">$XX.XXX ARS</p>
        <p className="text-gray-600 mb-6">Incluye diseño, copy, integración y entrega en 48h.</p>
        <a href="#" className="bg-black text-white px-8 py-3 rounded-xl font-semibold">
          Solicitar ahora
        </a>
      </section>

      {/* CTA FINAL */}
      <footer className="text-center py-16 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">¿Listo para empezar?</h2>
        <a href="#" className="bg-black text-white px-8 py-3 rounded-xl font-semibold">
          Hablemos por WhatsApp
        </a>
      </footer>
    </div>
  );
};

//__

export function Landing() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col items-center">
      {/* HERO */}
      <section className="w-full max-w-4xl px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Diseño de Landing Pages Profesionales en 48 Horas
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">
          Convertí visitas en ventas con una landing pensada para vender desde el minuto uno.
        </p>
      </section>

      {/* PROBLEMA */}
      <section className="w-full max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">El problema que resuelvo</h2>
        <p className="text-gray-700 leading-relaxed">
          La mayoría de los negocios pierde ventas todos los días por no tener una landing clara, rápida y orientada a conversiones. Páginas lentas, confusas o mal diseñadas hacen que tus clientes abandonen antes de contactarte.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="w-full max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Beneficios</h2>
        <ul className="grid gap-3 text-gray-700">
          <li>✔ Entrega en 48h</li>
          <li>✔ Copywriting persuasivo incluido</li>
          <li>✔ Diseño limpio y moderno orientado a ventas</li>
          <li>✔ Integración de WhatsApp, email, reservas o pagos</li>
          <li>✔ Velocidad optimizada</li>
          <li>✔ 2 revisiones incluidas</li>
        </ul>
      </section>

      {/* LO QUE RECIBIS */}
      <section className="w-full max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Lo que recibís</h2>
        <ul className="grid gap-3 text-gray-700">
          <li>🎯 Landing completa y funcional</li>
          <li>🎯 Copywriting profesional</li>
          <li>🎯 Diseño responsive</li>
          <li>🎯 Integraciones listas y probadas</li>
          <li>🎯 Entrega en 48h</li>
          <li>🎯 Asesoría incluida</li>
        </ul>
      </section>

      {/* PROCESO */}
      <section className="w-full max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Mi proceso</h2>
        <ol className="grid gap-4 text-gray-700 list-decimal pl-4">
          <li>Me contás sobre tu negocio en 10 minutos.</li>
          <li>Creo el texto y la estructura de ventas.</li>
          <li>Diseño tu landing con enfoque en conversiones.</li>
          <li>Te la entrego en 48h lista para usar.</li>
          <li>Revisiones finales incluidas.</li>
        </ol>
      </section>

      {/* GARANTIA */}
      <section className="w-full max-w-3xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Garantía</h2>
        <p className="text-gray-700">
          Si la landing no cumple con lo acordado, la reviso sin costo hasta dejarla perfecta.
        </p>
      </section>

      {/* PRECIO */}
      <section className="w-full max-w-3xl px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Precio</h2>
        <p className="text-4xl font-bold mb-2">$[tu precio acá] ARS</p>
        <p className="text-gray-700">Incluye diseño, texto, integraciones y entrega en 48h.</p>
      </section>

      {/* CTA FINAL */}
      <section className="w-full max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para empezar?</h2>
        <p className="text-gray-700 mb-8">
          Enviame un mensaje y arrancamos hoy mismo.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://wa.me/[tu-numero]"
            className="px-8 py-3 rounded-2xl bg-black text-white text-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Hablar por WhatsApp
          </a>
          <a
            href="mailto:[tu-email]"
            className="text-gray-700 underline hover:text-black transition"
          >
            Enviar email
          </a>
        </div>
      </section>
    </div>
  );
}

export function Landing2() {
  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "problema", label: "Problema" },
    { id: "beneficios", label: "Beneficios" },
    { id: "recibis", label: "Lo que recibís" },
    { id: "proceso", label: "Proceso" },
    { id: "garantia", label: "Garantía" },
    { id: "precio", label: "Precio" },
    { id: "cta", label: "CTA Final" },
  ];

  const [active, setActive] = useState("hero");

  const renderContent = () => {
    switch (active) {
      case "hero":
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Diseño de Landing Pages Profesionales en 48 Horas
            </h1>
            <p className="text-lg md:text-2xl text-gray-600">
              Convertí visitas en ventas con una landing pensada para vender desde el minuto uno.
            </p>
          </div>
        );
      case "problema":
        return (
          <p className="text-gray-700 leading-relaxed text-center max-w-2xl mx-auto">
            La mayoría de los negocios pierde ventas todos los días por no tener una landing clara, rápida y orientada a conversiones. Páginas lentas, confusas o mal diseñadas hacen que tus clientes abandonen antes de contactarte.
          </p>
        );
      case "beneficios":
        return (
          <ul className="grid gap-3 text-gray-700 text-center">
            <li>✔ Entrega en 48h</li>
            <li>✔ Copywriting persuasivo incluido</li>
            <li>✔ Diseño moderno orientado a ventas</li>
            <li>✔ Integración de WhatsApp, email o reservas</li>
            <li>✔ Velocidad optimizada</li>
            <li>✔ 2 revisiones incluidas</li>
          </ul>
        );
      case "recibis":
        return (
          <ul className="grid gap-3 text-gray-700 text-center">
            <li>🎯 Landing completa y funcional</li>
            <li>🎯 Copywriting profesional</li>
            <li>🎯 Diseño responsive</li>
            <li>🎯 Integraciones listas y probadas</li>
            <li>🎯 Entrega en 48h</li>
            <li>🎯 Asesoría incluida</li>
          </ul>
        );
      case "proceso":
        return (
          <ol className="grid gap-4 text-gray-700 list-decimal pl-6 max-w-xl mx-auto">
            <li>Me contás sobre tu negocio en 10 minutos.</li>
            <li>Creo el texto y la estructura de ventas.</li>
            <li>Diseño tu landing con enfoque en conversiones.</li>
            <li>Te la entrego en 48h lista para usar.</li>
            <li>Revisiones finales incluidas.</li>
          </ol>
        );
      case "garantia":
        return (
          <p className="text-gray-700 text-center max-w-xl mx-auto">
            Si la landing no cumple con lo acordado, la reviso sin costo hasta dejarla perfecta.
          </p>
        );
      case "precio":
        return (
          <div className="text-center">
            <p className="text-4xl font-bold mb-2">$[tu precio acá] ARS</p>
            <p className="text-gray-700">Incluye diseño, texto, integraciones y entrega en 48h.</p>
          </div>
        );
      case "cta":
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para empezar?</h2>
            <p className="text-gray-700 mb-8">Enviame un mensaje y arrancamos hoy mismo.</p>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://wa.me/[tu-numero]"
                className="px-8 py-3 rounded-2xl bg-black text-white text-lg font-semibold shadow-lg hover:scale-105 transition"
              >
                Hablar por WhatsApp
              </a>
              <a
                href="mailto:[tu-email]"
                className="text-gray-700 underline hover:text-black transition"
              >
                Enviar email
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex flex-col items-center py-12 px-4">
      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2 rounded-xl border text-sm font-medium transition shadow-sm
              ${active === tab.id ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-3xl min-h-[200px] flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
}



export  function LandingPremium() {
  const tabs = [
    { id: "hero", label: "Título" },
    { id: "problema", label: "Problema" },
    { id: "beneficios", label: "Beneficios" },
    { id: "entrega", label: "Lo que recibís" },
    { id: "proceso", label: "Proceso" },
    { id: "garantia", label: "Garantía" },
    { id: "precio", label: "Precio" },
    { id: "cta", label: "CTA Final" }
  ];

  const [active, setActive] = useState("hero");

  const content = {
    hero: (
      <div className="section">
        <h1 className="title">Landings profesionales en 48 horas</h1>
        <p className="subtitle">
          Convertí más ventas con una landing moderna, rápida y optimizada.
        </p>
      </div>
    ),
    problema: (
      <div className="section">
        <h2>¿El problema?</h2>
        <p>
          La mayoría de los negocios pierden clientes porque no tienen un espacio
          claro donde vender. Una landing bien hecha cambia eso.
        </p>
      </div>
    ),
    beneficios: (
      <div className="section">
        <h2>Beneficios</h2>
        <ul>
          <li>Diseño premium y moderno</li>
          <li>Optimizada para ventas</li>
          <li>Entrega en 48 horas</li>
          <li>Listo para publicidad</li>
        </ul>
      </div>
    ),
    entrega: (
      <div className="section">
        <h2>Lo que recibís</h2>
        <ul>
          <li>Landing completa</li>
          <li>Texto de ventas armado</li>
          <li>Template editable</li>
          <li>Optimización para anuncios</li>
        </ul>
      </div>
    ),
    proceso: (
      <div className="section">
        <h2>Proceso</h2>
        <ol>
          <li>Te hago 3 preguntas</li>
          <li>Armo el copy</li>
          <li>Diseño la landing</li>
          <li>La entrego en 48h</li>
        </ol>
      </div>
    ),
    garantia: (
      <div className="section">
        <h2>Garantía</h2>
        <p>Si no te gusta, no la pagás. Tan simple como eso.</p>
      </div>
    ),
    precio: (
      <div className="section">
        <h2>Precio</h2>
        <p className="price">AR$ 49.000</p>
        <p>Entrega en 48 horas incluida.</p>
      </div>
    ),
    cta: (
      <div className="section">
        <h2>¿Listo para vender más?</h2>
        <button className="cta-button">Quiero mi landing</button>
      </div>
    )
  };

  return (
    <div className="container">
      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="content-box fade">{content[active]}</div>
    </div>
  );
}

//__

export function ExtrasSelector() {
  
  const items = [
    { id: 1, name: "Presentación de tu negocio, rubro, marca, logo, eslogan, imagen y botón de llamada a la acción", price: 45000 },
    { id: 2, name: "Botón de WhatsApp optimizado", price: 0},
    { id: 3, name: "Botón de enlace a redes", price: 0},
    { id: 4, name: "Galería de imágenes", price: 0},
    { id: 5, name: "Catálogo simple de productos/servicios", price: 0},
    { id: 6, name: "Sección de testimonios", price: 0},
    // { id: "form", label: "Formulario con notificación por email", price: 8000 },
    // { id: "sticky", label: "Barra superior con llamado a la acción", price: 9000 }
  ];
  const extras = [
    { id: "agenda", name: "Agenda para reservar turnos", price: 25000 },
    { id: "maps", name: "Agregar tu negocio en Google Maps", price: 20000 },
    { id: "ubicación", name: "Mapa de Google integrado", price: 30000 },
    { id: "Tienda online", name: "Tienda online", price: 100000 },
  ]

  const [selected, setSelected] = useState([1,2,3,4,5,6]);

  const handleToggle = (id) => {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((x) => x !== id)
        : [...current, id]
    );
  };

  const total = items
    .filter((item) => selected.includes(item.id))
    .reduce((acc, item) => acc + item.price, 0);


  const total2 = extras
    .filter((item) => selected.includes(item.id))
    .reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="extras">
      <h2>Elegí solo lo que necesites — rápido, profesional y sin vueltas.</h2>
      <h3>Recomendados</h3>
      {items.map((item) => (
        <label key={item.id} className="extra-item" style={{backgroundColor: 'rgba(100,100,100,0.2)',margin: '2px', borderRadius:'8px',padding:'2px',display: 'flex', justifyContent: 'space-between', }}>
          {item.id !== 1 && <input
            type="checkbox"
            checked={selected.includes(item.id)}
            onChange={() => handleToggle(item.id)}
          />}
          <span>{item.name}</span>
          <strong>${item.price}</strong>
        </label>
      ))}
      
      {/* <div className="extra-total">
        <strong>subtotal:</strong> <strong>${total}</strong>
      </div> */}
      
      <h3>Extras opcionales</h3>
      {extras.map((item) => (
        <label key={item.id} className="extra-item" style={{backgroundColor: 'rgba(100,100,100,0.2)',margin: '2px', borderRadius:'8px',padding:'2px',display: 'flex', justifyContent: 'space-between', }}>
          <input
            type="checkbox"
            checked={selected.includes(item.id)}
            onChange={() => handleToggle(item.id)}
          />
          <span>{item.name}</span>
          <strong>${item.price}</strong>
        </label>
      ))}
      
      {/* <div className="extra-total">
        <strong>subtotal:</strong> <strong>${total2}</strong>
      </div>
      */}
      <br/>
      <br/> 
      <div className="extra-total"  style={{backgroundColor: 'rgba(100,100,100,0.2)',margin: '2px', borderRadius:'8px',padding:'2px',display: 'flex', justifyContent: 'space-between', }}>
        <strong>Total:</strong> <strong>${total + total2}</strong>
      </div>
      {/* <div className="extra-total">
        Total: <strong>${total}</strong>
      </div> */}

      <a
        href={`https://wa.me/5491158774985?text=Hola!%20Estoy%20interesado%20en%20una%20landing%20page.%20Mi%20presupuesto%20actual%20es%20de%20$${total + total2}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        Quiero una Landing para mi negocio
      </a>

    </div>
  );
}


function ExtrasSelector2({ onChange }) {
  const options = [
    { id: "description", label: "Presentación y descripción de tu negocio, rubro, marca, logo, eslogan, una imagen y botón de llamada a la acción", price: 45000 },
    { id: "whatsapp", label: "Botón de WhatsApp optimizado", price: 0},
    { id: "redes", label: "Botón de enlace a redes sociales", price: 0},
    { id: "galeria", label: "Galería visual de imágenes", price: 0},
    { id: "catalogo", label: "Catálogo simple de productos/servicios", price: 0},
    { id: "testimonios", label: "Sección de testimonios", price: 0},

    { id: "agenda", label: "Agenda para reservar turnos", price: 25000 },
    { id: "maps", label: "Agregar tu negocio en Google Maps", price: 20000 },
    { id: "ubicación", label: "Mapa de Google integrado", price: 30000 },
    { id: "Tienda online", label: "Tienda online", price: 100000 },
    // { id: "form", label: "Formulario con notificación por email", price: 8000 },
    // { id: "sticky", label: "Barra superior con llamado a la acción", price: 9000 }
  ];

  const handleChange = (id, price, checked) => {
    onChange(id, checked ? price : -price);
  };

  return (
    <div className="extras-box">
      <h2>Elegí solo lo que necesitás — rápido, profesional y sin vueltas</h2>
      {options.map((opt) => (
        <div key={opt.id} className="extra-item" style={{backgroundColor: 'rgba(100,100,100,0.2)',margin: '2px', borderRadius:'8px',padding:'2px',display: 'flex', justifyContent: 'space-between', }}>
          <label style={{width:'85%'}}>
            <input
              type="checkbox"
              onChange={(e) => handleChange(opt.id, opt.price, e.target.checked)}
            />
            {opt.label}
          </label>
          <span className="price-tag" style={{width:'15%', display: 'flex', justifyContent: 'space-between', }}>
            <span>AR$</span> <span>{opt.price}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default function LandingPremium2() {
  const tabs = [
    { id: "hero", label: "Inicio" },
    { id: "extras", label: "Funcionalidades"},
    { id: "problema", label: "Soluciones" },
    // { id: "beneficios", label: "Beneficios" },
    { id: "entrega", label: "Lo que recibís" },
    { id: "proceso", label: "Proceso" },
    // { id: "garantia", label: "Garantía" },
    { id: "precio", label: "Precio" },
    { id: "cta", label: "Contacto" }
  ];

  const [active, setActive] = useState("hero");

  const content = {
    extras: <ExtrasSelector onChange={() => {}} /> ,
    hero: (
      <div className="section">
        <h1 className="title">Landings profesionales en 48 horas 💻⏳</h1>
        <p className="subtitle">
          Convertí más ventas con una landing moderna, rápida y optimizada.
        </p>
        <h2>
          ¿Qué es una Landing?
        </h2>
        <p className="subtitle">
          Una <b>Landing</b> (en español, <b><i>Aterrizaje</i></b>), es ese mini sitio para presentarte a vos y a tu negocio. 
          <br/> Es a donde vas a dirigir a tus potenciales clientes para que te conozcan mejor, 
          exploren tus servicios y puedan contactarte con una intención de compra más definida.
        </p>
      </div>
    ),
    problema: (
      <div className="section">
        <h2>¿Por qué tener una Landing de tu negocio? 📈</h2>
        <p>
          Una Landing te ayuda a convertir en clientes a quienes te visitan por primera vez, 
          dándoles información clara y simplificando que te contacten o reserven un turno.
        </p>
      {/* </div>
    ),
    beneficios: (
      <div className="section"> */}
        <h2>Beneficios</h2>
        <ul>
          <li>Diseño premium y moderno</li>
          <li>Optimizada para ventas</li>
          <li>Entrega en 48 horas</li>
          <li>Listo para publicidad</li>
        </ul>
      </div>
    ),
    entrega: (
      <div className="section">
        <h2>Lo que recibís 🫱🏻‍🫲🏻</h2>
        <ul>
          <li>Landing completa</li>
          <li>Texto de ventas armado</li>
          <li>Template editable</li>
          <li>Optimización para anuncios</li>
        </ul>
      </div>
    ),
    proceso: (
      <div className="section">
        <h2>Proceso ✍🏻</h2>
        <ol>
          <li>Te hago un par de preguntas</li>
          <li>Armo el copy</li>
          <li>Diseño la landing</li>
          <li>La entrego en 48h</li>
        </ol>
      </div>
    ),
    // garantia: (
    //   <div className="section">
    //     <h2>Garantía</h2>
    //     <p>Si no te gusta, la modificamos hasta que quede como vos querés.</p>
    //   </div>
    // ),
    precio: (
      <div className="section">
        <h2>Precio 🪙</h2>
        <p className="price">AR$ 45.000</p>
        <p>Entrega en 48 horas incluida.</p>
      </div>
    ),
    cta: (
      <div className="section">
        <h2>¿Listo para vender más? 📨</h2>
        
        <a
          href={`https://wa.me/5491158774985?text=Hola!%20Estoy%20interesado%20en%20una%20landing%20page.`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          Quiero una Landing para mi negocio
        </a>
      </div>
    )
  };

  return (
    <div className="container">

      {/* <button id="theme-toggle" className="theme-toggle">
        🌙
      </button> */}

      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab ${active === t.id ? "active" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="content-box fade">{content[active]}</div>
    </div>
  );
}