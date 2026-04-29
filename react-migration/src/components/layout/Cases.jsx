import { LOGO_PATH } from '../../config';

export default function Cases() {
  return (
    <section className="cases">
        <div className="container">
            <h2 className="section__title">Empresas líderes já alcançaram resultados com a metodologia da Edugital</h2>
            <div className="partners-grid" id="clientes">
                <div className="partner-logo partner-logo--transparent partner-logo--large partner-logo--descomplica"><img
                        src={`${LOGO_PATH}Descomplica.webp`} alt="Descomplica" loading="lazy" width="160" height="90" />
                </div>
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}EBAC.webp`} alt="EBAC"
                        loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}fam-960x640.webp`} alt="FAM"
                        loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}gf.webp`} alt="GF"
                        loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent partner-logo--xxsmall"><img
                        src={`${LOGO_PATH}IATEC-vertical-colorida.webp`} alt="IATEC" loading="lazy" width="160"
                        height="90" /></div>
                <div className="partner-logo partner-logo--transparent partner-logo--xsmall"><img src={`${LOGO_PATH}ibm.webp`}
                        alt="IBM" loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent partner-logo--small"><img
                        src={`${LOGO_PATH}iIBmec.webp`} alt="IBMec" loading="lazy" width="160" height="90" /></div>
                {/* Outros logos convertidos - ajuste se os nomes tiverem %20 mudado no file system */}
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}images (1).webp`}
                        alt="Parceiro" loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent partner-logo--small"><img
                        src={`${LOGO_PATH}images (2).webp`} alt="Parceiro" loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}institutosabersocial.webp`}
                        alt="Instituto Saber Social" loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent partner-logo--small"><img
                        src={`${LOGO_PATH}John Deere.webp`} alt="John Deere" loading="lazy" width="160" height="90" />
                </div>
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}Logo-IGCE-256x92.webp`}
                        alt="IGCE" loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent"><img
                        src={`${LOGO_PATH}logo_grupo_impacta_azul-01.webp`} alt="Grupo Impacta" loading="lazy" width="160"
                        height="90" /></div>
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}usp.webp`} alt="USP"
                        loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent partner-logo--large"><img
                        src={`${LOGO_PATH}vixpar.webp`} alt="Vixpar" loading="lazy" width="160" height="90" /></div>
                <div className="partner-logo partner-logo--transparent"><img src={`${LOGO_PATH}whirlpool.webp`}
                        alt="Whirlpool" loading="lazy" width="160" height="90" /></div>
            </div>
        </div>
    </section>
  );
}
