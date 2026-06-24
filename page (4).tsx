'use client';

import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push('/projects');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-blue-600">BudgetControl</h1>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="px-6 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Iniciar Sesión
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="text-center px-4 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Control de Presupuesto para Construcción
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          Gestiona tus presupuestos, compras e invoices con inteligencia artificial.
          Controla en tiempo real el estado de tu proyecto.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Dashboard en Tiempo Real</h3>
            <p className="text-gray-600">
              Visualiza tu presupuesto y gasto instantáneamente
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-2">Clasificación Inteligente</h3>
            <p className="text-gray-600">
              Categoriza automáticamente tus compras con IA
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📁</div>
            <h3 className="text-xl font-bold mb-2">Múltiples Proyectos</h3>
            <p className="text-gray-600">
              Gestiona varios proyectos simultáneamente
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 text-left">
            <h3 className="text-xl font-bold mb-4">✨ Características Principales</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Importar presupuestos desde Excel/PDF</li>
              <li>✓ Registrar compras e invoices</li>
              <li>✓ Clasificación automática con IA</li>
              <li>✓ Alertas de presupuesto excedido</li>
              <li>✓ Exportar reportes</li>
              <li>✓ Auditoría completa de cambios</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-left">
            <h3 className="text-xl font-bold mb-4">🌐 Soporte</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ RD$ (Pesos Dominicanos)</li>
              <li>✓ USD (Dólares)</li>
              <li>✓ Interfaz en Español</li>
              <li>✓ Control de acceso por rol</li>
              <li>✓ Soporte multi-proyecto</li>
              <li>✓ Historial de cambios</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/signup"
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 inline-block"
          >
            Comenzar Gratis
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 bg-white border-t text-center py-4 text-gray-600">
        <p>© 2024 BudgetControl. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
