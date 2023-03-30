import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserThemeContext } from "./withTheme";

import { SideMenuContainer, PageContent, RowDiv } from "./layout.style";

const withLayout = (...WrappedComponent: any) => {
  const Layout = (props: any) => {
    const themevalue = useContext(UserThemeContext);
    let dark = themevalue.name === "dark-mode" ? true : false;
    return (
      <>
        <RowDiv>
          <SideMenuContainer $dark={dark}>
            i love me
          </SideMenuContainer>
          <PageContent $dark={dark}>
            <div>
              <h2>Dashboard Page</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, sit. Doloribus, alias! Temporibus suscipit velit provident incidunt dicta? Enim eveniet accusantium veritatis vel nobis praesentium. Corporis, rem. Eveniet, optio? Ullam?
                Impedit assumenda velit quos voluptates facilis inventore libero ipsa esse nesciunt odit sint sit alias, maxime totam cum fuga. Eum at atque quod officia qui saepe delectus ullam nihil consequatur.
                Natus, vel tenetur dignissimos ex, magnam alias magni, esse sed doloremque explicabo animi possimus? Temporibus natus quis, iste asperiores unde aliquid numquam, iure mollitia placeat, soluta voluptate quasi. Expedita, autem!
                Vel voluptatem quis commodi vero provident iste obcaecati a architecto labore est. Facilis reprehenderit minus possimus qui natus cum sapiente dolor obcaecati, nemo impedit quae ex, non accusantium odio modi?
                Quam error voluptatem veritatis exercitationem est accusamus ad voluptatum repellat culpa, adipisci assumenda atque deserunt quae, quis eos quaerat? Ratione dolore facilis adipisci nemo placeat quaerat quasi. Molestiae, totam quod.
                Debitis consequuntur laboriosam eius beatae maiores eos ipsam assumenda. Maxime, voluptas perspiciatis laudantium illo ipsum odio tempora quasi laboriosam vero distinctio rerum fuga quaerat dignissimos architecto quos quae a sit!
                Ipsa officia, laboriosam veritatis, quis iusto consectetur ipsam molestiae incidunt pariatur beatae fugit minima. Ipsa molestiae alias ullam! Vitae soluta, laboriosam rem dolore vero aperiam officiis ea sint officia recusandae?
                Tempore, minima expedita. Nulla porro earum repellat inventore a nobis sapiente omnis beatae deserunt quod, molestiae impedit magni, vitae eius nihil aut? Deleniti ipsa labore facere doloremque eligendi ea velit?
                Explicabo ullam officia doloremque molestiae labore sint quo autem quibusdam aut repudiandae soluta deleniti, exercitationem totam, nihil nemo eum tempora vitae dolores eveniet! Eaque illum possimus ab, eveniet quia modi.
                Totam debitis iure, illo animi laudantium porro libero eligendi dolore quod earum nisi vitae mollitia doloremque, aliquid nihil iste praesentium. Consequuntur odit quis tempore omnis quae minima blanditiis voluptate porro?
                Consequuntur sequi qui alias, aut perspiciatis veniam dolores quidem et nobis ipsam odio corrupti repellat libero expedita. Beatae enim sapiente, deserunt architecto vero minima ut recusandae, illo molestiae ipsum ipsam?
                Possimus fuga a laboriosam iure ipsum tenetur magnam nam perferendis, vel facilis sunt aperiam delectus obcaecati, quam pariatur hic debitis aliquam soluta nihil similique vero voluptatem, eligendi laborum! Doloribus, accusamus.
                Autem reiciendis modi porro voluptatibus dolore pariatur maxime, minus sequi voluptates quibusdam facilis fuga earum tenetur nobis quae neque quos corporis dicta quidem at iusto eveniet totam vitae? Ea, nam.
                Praesentium pariatur enim optio quae tenetur ut quibusdam, officia exercitationem ipsum totam sed porro doloribus provident quo nostrum ratione dolorum voluptatibus, debitis, nam repellendus! Quae id distinctio sed. Ad, voluptas?
                Ad voluptates voluptas nam commodi ipsum quisquam sit? Voluptatibus officiis aliquam doloribus sapiente fugit sequi expedita nam nisi obcaecati error? Aut consectetur iste minima neque adipisci officiis consequuntur ad quas?
                Iusto doloribus facere debitis harum. Maxime, nesciunt! Eaque esse quisquam aperiam fugit tempore cum sunt incidunt accusantium nemo in labore aspernatur fugiat repellendus, neque, rem minus, perspiciatis recusandae dicta assumenda?
                Veritatis dolores nobis in cum ratione autem sunt praesentium obcaecati enim vitae accusamus tempora possimus non corporis quaerat optio iste, culpa corrupti, quidem debitis! Reprehenderit totam iste dolorum fugiat quas.
                In recusandae dolorem non ratione porro pariatur atque quo quisquam vitae dolores asperiores provident, sapiente at? Incidunt reiciendis aliquam, cumque, recusandae voluptatem nam ut quod nisi nulla distinctio unde molestiae.
                Similique possimus quidem asperiores cupiditate illum esse, magni eveniet beatae ea nobis architecto quasi. Maiores porro asperiores perferendis. Vero eius nam blanditiis distinctio quas ipsam iste quia, aliquam repellat odit!
                Nesciunt rem sit, maiores et illum dolor voluptatem amet ducimus asperiores unde voluptates, reprehenderit, excepturi sapiente nobis rerum beatae vero iusto debitis accusamus possimus magni laborum nemo quibusdam. Voluptatum, laudantium.
                Reprehenderit quibusdam magnam beatae itaque. Fuga, laboriosam hic reiciendis eum quo cum repudiandae mollitia provident dignissimos natus eveniet incidunt commodi ipsam culpa! Esse obcaecati perspiciatis quasi omnis qui libero possimus.
                Eum perspiciatis qui natus voluptatum obcaecati aspernatur nihil atque impedit nam quibusdam ab optio esse harum voluptas itaque repudiandae, alias, excepturi quo corporis libero facere! Similique, eaque corporis. Velit, voluptates?
                Et laborum, ad esse aut suscipit corrupti dolorem alias sed eius placeat accusamus dolore. Nulla ipsam blanditiis enim, explicabo tenetur cumque excepturi accusantium rem soluta architecto sapiente saepe, eius incidunt!
                At molestias nulla facilis nostrum iusto animi corrupti quod iste, ab iure atque, esse laborum, delectus ipsum cumque. Debitis nesciunt odit minima facere nemo ratione adipisci minus. Cupiditate, dicta ullam!
                Repudiandae itaque voluptatum eveniet repellendus doloribus, dolore consectetur iusto similique veniam unde accusamus iure obcaecati est impedit quis dolor cupiditate, deleniti consequatur ipsa dicta! Minima at nihil ipsam voluptatem hic.
                Ut quae impedit harum quos unde, amet id corporis quod vero debitis nisi repudiandae reiciendis fugit voluptatem architecto odit ex commodi neque, necessitatibus cupiditate reprehenderit, in quia enim! Et, numquam!
                Ullam, reprehenderit praesentium? Eligendi vitae inventore aliquid deserunt? Magni ipsum illum modi ab deleniti maxime! Quod atque ea quae quos similique perferendis velit incidunt voluptatem? Error optio deleniti alias illo.
                Expedita mollitia saepe, non natus quia at harum dolor illum vitae aliquam unde vel, quibusdam quos minima et, doloribus ipsam eveniet deleniti. Culpa exercitationem sit, illo aliquid aliquam porro quam!
                Dolorum, perferendis blanditiis dolore laudantium culpa molestiae fugiat magnam debitis laborum. Nisi optio aliquid alias iure neque qui est quas excepturi ipsum rerum mollitia delectus velit vel repellat, nostrum dolor.
                Quod rerum, voluptatem obcaecati maiores nulla totam assumenda magnam animi libero expedita. Ratione eius amet quibusdam non repudiandae, fugiat suscipit. Est, neque veniam illum consectetur corrupti odio sit sequi necessitatibus!
                Fugiat odio officiis sed perferendis nobis at minus maxime adipisci, eius sapiente, aperiam, repellat vitae qui corrupti nemo accusamus exercitationem reiciendis! Molestiae necessitatibus, veritatis molestias repellendus illo iste minima? Consequuntur.
                Modi sapiente illo velit provident non accusantium neque odio adipisci possimus eaque ipsam quas facere iusto eum quo fugit consequatur quis, labore error. Voluptatibus, sed qui. Facere deleniti natus explicabo?
                Veniam quis, aspernatur suscipit quaerat impedit vitae dolor mollitia consequatur tempore exercitationem voluptatibus, dolores ab eum iste. Aliquam, in est aliquid suscipit officiis magni quae itaque unde iusto, minus quas.
                Autem quisquam aut qui. Beatae, rerum velit. Cum, molestias eligendi distinctio consequatur, eos error aliquam doloremque et nostrum animi debitis impedit mollitia vitae cupiditate quae quos nulla accusamus enim neque.
                Laborum id pariatur, neque dolor cumque facilis eaque officiis eligendi, porro ipsum dolores dolorem vel. Dignissimos, odit mollitia dolore impedit repellat laborum unde corporis labore aliquam distinctio reiciendis dolorum? Placeat!
                Blanditiis quia iusto laboriosam reiciendis tenetur impedit et aspernatur, sit consectetur enim id illo, perspiciatis veniam? Minus labore, non cum quae libero vero repellendus harum sint quam aliquam, deleniti temporibus.
                Amet delectus temporibus porro molestiae tenetur explicabo iste expedita similique voluptas velit repellendus, doloribus et, aliquid dolorem. Et ipsum quos quisquam ipsam nam quod libero, voluptatem, ab praesentium laboriosam cupiditate!
                Tenetur exercitationem dolorem natus deserunt harum molestias, quam itaque laboriosam nostrum, molestiae tempora, officiis nihil est excepturi sint perferendis dolores temporibus? Tenetur, placeat recusandae. Optio quas sed commodi esse non.
                Totam, commodi velit? Amet dolorem fuga culpa, accusantium omnis tempore autem nisi, sint, enim impedit quidem voluptatem. Iusto non iure facere voluptatibus ipsum, hic voluptate corporis, doloremque harum ea optio.
                Est dolor voluptas libero reprehenderit impedit deserunt nihil nulla rerum, quod, iste consequatur esse, itaque commodi odio quo dolores deleniti cumque harum. A molestias iusto distinctio velit adipisci ducimus laudantium.
                Voluptatem ea ullam libero. Fuga vero assumenda, deleniti blanditiis sapiente neque rerum! Tempore esse tempora, ratione provident id suscipit, voluptas cumque ipsum at, quas aliquam facere ut! Alias, ducimus iusto!
                Recusandae libero soluta voluptas vel aspernatur dolorum? Reprehenderit doloremque, itaque corporis laudantium deserunt nobis laborum modi. Omnis voluptates autem similique est, quas, itaque odio, incidunt sapiente veritatis velit iusto earum?
                Architecto esse non sint sapiente repudiandae iure autem nisi dolore quibusdam corrupti, beatae alias saepe iusto amet deleniti dolor. Voluptate, nemo totam iure maiores nihil a sit dolore eius est?
                Eaque, velit omnis! Iure id quos dolor, ut numquam ex quidem deleniti voluptas veritatis tenetur, consequatur sapiente accusamus officiis molestiae exercitationem assumenda eaque architecto ea voluptates rem possimus reprehenderit. Voluptatem.
                Iste, vel. Commodi eos corrupti animi voluptatum voluptates et nobis quod nostrum voluptas blanditiis maxime, fugit tenetur id placeat! Impedit, alias repellat modi minima tenetur sed quaerat ullam porro asperiores!
                Perspiciatis repudiandae voluptatibus, ratione culpa, iure tempore aut accusamus velit voluptatum suscipit repellat! Possimus amet veritatis reprehenderit? Maiores, quas sapiente fugiat, vel voluptatum omnis repudiandae dicta maxime magni dolorum pariatur.
                Cum dolores provident error sapiente quia nulla, ipsa voluptatum minus culpa incidunt amet inventore quam fugit laboriosam asperiores maxime est doloremque ea unde! Quis eos reprehenderit at dolor tenetur fuga!
                Aperiam, aut quasi! Fuga, libero velit, est a nemo, officiis minus reiciendis accusantium sed nulla excepturi molestiae sint consequatur minima. Possimus delectus qui laboriosam et neque nulla culpa omnis a?
                Soluta, alias amet maxime quos, consectetur reiciendis laudantium autem culpa quasi ab deserunt esse tempora assumenda quibusdam ipsum consequatur. Suscipit nostrum repellat autem et esse eveniet earum quibusdam reprehenderit deserunt!
                Explicabo modi, nobis dolorum totam officiis asperiores esse voluptas assumenda cum deserunt harum necessitatibus natus, officia praesentium dignissimos rerum atque ducimus excepturi? Tempore ad voluptas assumenda? Veritatis natus repellat ea.
              </p>
            </div>
          </PageContent>
        </RowDiv>
        <div>footer</div>
      </>
    );
  };

  return Layout;
};

export default withLayout;
