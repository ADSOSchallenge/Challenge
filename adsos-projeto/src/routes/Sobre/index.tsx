import hcsobre from '../../assets/hcsobre.png';
import hc from '../../assets/hc.png';
export default function Sobre() {
  document.title = "Sobre";

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4">
        <article className="max-w-4xl mx-auto">
          <section className="mb-8">
            <h2 className="section-title mb-4">HC</h2>
            <p className="text-black text-left mb-4">
              O Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP) é uma instituição de excelência em saúde, ensino e pesquisa, reconhecida nacional e internacionalmente. Como o maior complexo hospitalar da América Latina, atende casos de alta complexidade e é referência no Sistema Único de Saúde (SUS).
            </p>
            <p className="text-black text-left mb-4">
              O HCFMUSP tem como missão prestar assistência médico-hospitalar de qualidade, formar profissionais de saúde e desenvolver pesquisas científicas que transformam vidas. Atua como hospital de referência para casos de alta complexidade, atendendo pacientes de todo o Brasil.
            </p>
            <img
              src={hcsobre} 
              alt="Foto do Hospital das Clínicas"
              className="mx-auto max-w-xs"
            />
          </section>

          <section className="mb-8">
            <h2 className="section-title mb-4">O que é o Hospital das Clínicas?</h2>
            <p className="text-black text-left mb-4">
              O Hospital das Clínicas da Faculdade de Medicina da Universidade
              de São Paulo (HCFMUSP) é o maior complexo hospitalar da América
              Latina e uma referência nacional e internacional em saúde, ensino
              e pesquisa.
            </p>
            <p className="text-black text-left mb-4">
              Inaugurado em 19 de abril de 1944, o HCFMUSP é uma autarquia do
              governo do estado de São Paulo, vinculada à Secretaria de Estado
              da Saúde para fins administrativos e associado à Faculdade de
              Medicina da USP para atividades de ensino e pesquisa.
            </p>
            <p className="text-black text-left mb-4">
              Para mais informações, visite o site oficial:{" "}
              <a
                target="_blank"
                href="https://www.hc.fm.usp.br/"
                className="text-[#285f89] hover:underline"
                aria-label="Ir para o site oficial do Hospital das Clínicas"
              >
                Hospital das Clínicas
              </a>
            </p>
            <img
              src={hc} 
              alt="Foto da logo do Hospital das Clínicas"
              className="mx-auto max-w-xs"
            />
          </section>
        </article>
      </main>

    </div>
  );
}