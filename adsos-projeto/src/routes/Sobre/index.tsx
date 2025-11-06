import { useEffect } from "react";
import hcsobre from '../../assets/hcsobre.png';
import hc from '../../assets/hc.png';

export default function Sobre(){
    useEffect(()=>{
        document.title = "Sobre";
    },[]);
    return(
    <main>
        <div>
            <section>
                <h1>Sobre o hc:</h1>
                <h2>HC</h2>
                <p>O Hospital das Clínicas da Faculdade de Medicina da USP (HCFMUSP) é uma instituição de excelência em saúde, ensino e pesquisa, reconhecida nacional e internacionalmente. Como o maior complexo hospitalar da América Latina, atende casos de alta complexidade e é referência no Sistema Único de Saúde (SUS).</p>

                <p>O HCFMUSP tem como missão prestar assistência médico-hospitalar de qualidade, formar profissionais de saúde e desenvolver pesquisas científicas que transformam vidas. Atua como hospital de referência para casos de alta complexidade, atendendo pacientes de todo o Brasil.</p>
                <img src={hcsobre} alt="Foto de Hospital" className="sobre-img" />
            </section>
            <section>
                <h2>O que é o Hospital das Clínicas?</h2>
                <p>O Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo (HCFMUSP) é o mais complexo hospitalar da América Latina e uma referência nacional e internacional em saúde, ensino e pesquisa.</p>
                <p>Inaugurado em 19 de abril de 1944, o HCFMUSP é uma autarquia do governo do estado de São Paulo vinculada à Secretaria de Estado da Saúde para fins administrativos e associado à Faculdade de Medicina da USP para atividades de ensino e pesquisa.</p>
            </section>
            <section>
            <p>Para mais informações, visite o site oficial:{" "}<a target="_blank" href="https://www.hc.fm.usp.br/" aria-label="Ir para o site oficial do Hospital das Clínicas">Hospital das Clínicas</a></p>
            <img src={hc} alt="Logo do Hospital das Clínicas" className="sobre-logo" />
            </section>
        </div>
    </main>
    );
}