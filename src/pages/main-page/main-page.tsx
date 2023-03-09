import React from 'react';
import './main-page.css';
import { SPMCQuality } from 'entities/spmc-quality/spmc-quality';
import { Slider } from 'features/slider/slider';
import { SpmcAbout } from 'shared/ui/spmc-about/spmc-about';
import { Fascinated } from 'shared/ui/fascinated/fascinated';
import { InfoList } from 'shared/ui/info-list/info-list';
import IconEcology from './images/info-list/Ico-ecology.svg';
import IconSocialResponsibility from './images/info-list/Ico-heart.svg';
import IconMan from './images/info-list/Ico-man.svg';
import { SpmcDirectorNote } from 'shared/ui/spmc-director-note/spmc-director-note';
import { ButtonToUp } from 'features/button-to-up/button-to-up';

export class MainPage extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="main-page">
        <div className="main-page__head-block">
          <SPMCQuality />
          <Slider slides={[]} slideWidth={800} slideHeight={800} />
        </div>
        <SpmcAbout />
        <Fascinated />
        <div className="main-page__info-list">
          <InfoList
            isTransposedTitle={false}
            iconSrc={IconEcology}
            textTitle="Экология"
            textList={[
              'Бережное использование природных ресурсов',
              'Соблюдение экологических законов',
              'Инициативы в экологии',
              'Безотходность производства',
            ]}
          />
          <InfoList
            iconSrc={IconSocialResponsibility}
            isTransposedTitle={true}
            textTitle="Социальная ответственность"
            textList={[
              'Прозрачные условия найма и труда',
              'Охрана здоровья и безопасность',
              'Контроль качества продукции',
              'Отсутствие неоплачиваемых переработок',
              'Безопасность данных и конфиденциальность клиентов',
              'Премирование сотрудников',
            ]}
          />
          <InfoList
            iconSrc={IconMan}
            isTransposedTitle={false}
            textTitle="Управление"
            textList={[
              'Структура и гендерный состав руководителей',
              'Антикоррупционная политика',
              'Прозрачность налоговой отчетности',
              'Поддержание комфортной климатической обстановки в компании',
            ]}
          />
        </div>
        <div className="main-page__director-note">
          <SpmcDirectorNote />
        </div>
        <div className="main-page__button-top-up">{/* <ButtonToUp /> */}</div>
      </div>
    );
  }
}
