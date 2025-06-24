// src/topics/KubernetesContainerSecurity.jsx
import { Server, Lock, Terminal, Shield } from 'lucide-react';

export const KubernetesContainerSecurity = {
  id: 6,
  title: "Keamanan Kubernetes dan Container",
  icon: <Server className="w-5 h-5 mr-3 text-blue-500" />,
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Keamanan Arsitektur Container</h4>
        <p className="text-gray-700 leading-relaxed">
          Dengan 92% organisasi menggunakan Kubernetes dalam produksi, keamanan container menjadi kritis.
          Ancaman utama termasuk konfigurasi yang salah, runtime vulnerabilities, dan serangan supply chain.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Terminal className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Ancaman Kubernetes
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Misconfigured RBAC policies</li>
            <li className="leading-snug">Privilege escalation</li>
            <li className="leading-snug">API server exposures</li>
            <li className="leading-snug">Container breakout attacks</li>
            <li className="leading-snug">Malicious container images</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Lock className="w-6 h-6 mr-3 text-blue-500 bg-purple-100 p-1 rounded-full" />
            Praktik Keamanan
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">Network policies dan segmentation</li>
            <li className="leading-snug">Pod security policies/standards</li>
            <li className="leading-snug">Image scanning dan signing</li>
            <li className="leading-snug">Runtime security monitoring</li>
            <li className="leading-snug">Immutable infrastructure</li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-lg">
            <Shield className="w-6 h-6 mr-3 text-blue-500 bg-blue-100 p-1 rounded-full" />
            Tools & Framework
          </h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li className="leading-snug">OPA/Gatekeeper untuk policy enforcement</li>
            <li className="leading-snug">Falco untuk runtime security</li>
            <li className="leading-snug">Trivy untuk vulnerability scanning</li>
            <li className="leading-snug">CIS Kubernetes Benchmarks</li>
            <li className="leading-snug">Service mesh (Istio, Linkerd)</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 shadow-sm">
        <h4 className="font-bold text-xl text-blue-800 mb-3">Studi Kasus Keamanan Container</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-blue-600 mb-2">Serangan Tesla Kubernetes (2018)</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Kubernetes cluster Tesla yang tidak diamankan dieksploitasi untuk penambangan cryptocurrency,
              karena pod yang menjalankan dashboard Kubernetes tanpa autentikasi.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h5 className="font-bold text-blue-600 mb-2">Vulnerability Docker (2019)</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              Kerentanan CVE-2019-5736 di runc memungkinkan container escape ke host system,
              memengaruhi semua platform container utama termasuk Docker dan Kubernetes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};