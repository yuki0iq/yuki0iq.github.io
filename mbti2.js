// Cognitive functions
aNi = ['Ni', 2, 1, 0, 0, -1], aNe = ['Ne', 2, 1, 0, 0, -1], aSi = ['Si', 2, 1, 0, 0, -1], aSe = ['Se', 2, 1, 0, 0, -1]
aFi = ['Fi', 2, 1, 0, 0, -1], aFe = ['Fe', 2, 1, 0, 0, -1], aTi = ['Ti', 2, 1, 0, 0, -1], aTe = ['Te', 2, 1, 0, 0, -1]
// Axes
aNiSe = ['NiSe', 2, 1, 0, 0, -1], aNeSi = ['NeSi', 2, 1, 0, 0, -1], aFiTe = ['FiTe', 2, 1, 0, 0, -1], aFeTi = ['FeTi', 2, 1, 0, 0, -1]
// Preference
aNiP = ['NiP', 2, 1, 0, -1], aNeP = ['NeP', 2, 1, 0, -1], aSiP = ['SiP', 2, 1, 0, -1], aSeP = ['SeP', 2, 1, 0, -1]
aFiP = ['FiP', 2, 1, 0, -1], aFeP = ['FeP', 2, 1, 0, -1], aTiP = ['TiP', 2, 1, 0, -1], aTeP = ['TeP', 2, 1, 0, -1]
// Vertigo
aNiV = ['NiV', 2, 1, 0, -1], aNeV = ['NeV', 2, 1, 0, -1], aSiV = ['SiV', 2, 1, 0, -1], aSeV = ['SeV', 2, 1, 0, -1]
// loops
alNiFe = ['lNiFe', 2, 1, 0, -1], alNiTe = ['lNiTe', 2, 1, 0, -1], alNeFi = ['lNeFi', 2, 1, 0, -1], alNeTi = ['lNeTi', 2, 1, 0, -1]
alSiFe = ['lSiFe', 2, 1, 0, -1], alSiTe = ['lSiTe', 2, 1, 0, -1], alSeFi = ['lSeFi', 2, 1, 0, -1], alSeTi = ['lSeTi', 2, 1, 0, -1]
alFiNe = ['lFiNe', 2, 1, 0, -1], alFiSe = ['lFiSe', 2, 1, 0, -1], alFeNi = ['lFeNi', 2, 1, 0, -1], alFeSi = ['lFeSi', 2, 1, 0, -1]
alTiNe = ['lTiNe', 2, 1, 0, -1], alTiSe = ['lTiSe', 2, 1, 0, -1], alTeNi = ['lTeNi', 2, 1, 0, -1], alTeSi = ['lTeSi', 2, 1, 0, -1]
// grips
agNi = ['gNi', 2, 1, 0, -1], agNe = ['gNe', 2, 1, 0, -1], agSi = ['gSi', 2, 1, 0, -1], agSe = ['gSe', 2, 1, 0, -1]
agTi = ['gTi', 2, 1, 0, -1], agTe = ['gTe', 2, 1, 0, -1], agFi = ['gFi', 2, 1, 0, -1], agFe = ['gFe', 2, 1, 0, -1]


question_sets = [
	['Сравнение когнитивных функций и осей', 'Ne против Ni, Se против Si, Fe против Fi, Te против Ti, FiTe против FeTi, NiSe против NeSi', 5, 2, [
		['При восприятии информации обращаю внимание на возможности и потенциальные варианты реализации идей (даже если не планирую их реализовывать)', [aNe, RA(aNi)],
			'При восприятии информации обращаю внимание на символы и образы, что всплывают в моём сознании'],
		['Мои идеи разнообразны', [aNe, RA(aNi)],
			'Мои идеи - углубленное рассмотрение одной идеи'],
		['Я знаю немного о многом', [aNe, RA(aNi)],
			'Я знаю много о малом'],
		['У меня в основном нет плана, в приоритете скорость реагирования', [aNe, RA(aNi)],
			'У меня в основном есть план, в приоритете анализирование'],
		['При выражении своего мнения или позиции чаще использую ассоциации', [aNe, RA(aNi)],
			'При выражении своего мнения или позиции чаще пытаюсь более дословно передать суть через репликацию своих внутренних образов'],
		['Я постоянно отвлекаюсь', [aNe, RA(aNi)],
			'У меня есть склонности к некропостингу (отвечать на очень старые сообщения, про которые все забыли)'],
		['В разговоре перескоки между темами - обычное дело', [aNe, RA(aNi)],
			'Я обычно не отхожу от темы, но, бывает, не рассказываю полностью, думая, что и так понятно'],
		['Я больше наблюдаю, чем реагирую', [aSi, RA(aSe)],
			'Я больше реагирую, чем наблюдаю'],
		['План моего будущего построен на опыте прошлого', [aSi, RA(aSe)],
			'У меня нет плана будущего, я живу в настоящем'],
		['Я учусь на своих ошибках', [aSi, RA(aSe)],
			'Я забываю о своих неудачах'],
		['В основном я делаю всё одинаково, могу документировать свои действия', [aSi, RA(aSe)],
			'Я забываю, какие действия были выполнены, и не стану записывать последовательность'],
		['Сначала думай, а потом действуй', [aSi, RA(aSe)],
			'Типичные богатыри: сначала бьют, а потом спрашивают'],
		['Лучше получить более сильное удовольствие, но потом', [aSi, RA(aSe)],
			'Не откладывай на завтра то, что может принести удовольствие уже сегодня'],
		['Я буду повторять те действия, которые уже принесли мне радость', [aSi, RA(aSe)],
			'Я ищу новые методы получения удовольствия'],
		['Мои ценности - это мои ценности', [aFi, RA(aFe)],
			'Я полностью разделяю ценности, принятые в обществе'],
		['Я составляю мнение, ставя в приоритет себя, а не группу', [aFi, RA(aFe)],
			'Я составляю мнение, ставя в приоритет группу, а не себя'],
		['Я осознаю себя больше, чем других', [aFi, RA(aFe)],
			'Я понимаю кого угодно лучше, чем себя'],
		['Личная форма эмпатии. Пример: Твою подругу бросил парень. Ты начинаешь представлять себя на ее месте как бы тебе было больно и обидно. И на этом фоне ты отождествляешь эмоциональное состояние другого человека', [aFi, RA(aFe)],
			'Социальная форма эмпатии, то есть ты реагируешь "как надо", хз как объяснить. Ты просто поддерживаешь без привязки к своему эго'],
		['Я - уникальный человек', [aFi, RA(aFe)],
			'Я хочу вписаться в общество'],
		['За мной следят', [aFi, RA(aFe)],
			'Я - невидимка'],
		['Я стараюсь не подстраиваться под людей', [aFi, RA(aFe)],
			'Отдельная маска на каждого человека или группу - это я'],
		['Я навожу порядок вокруг', [aTe, RA(aTi)],
			'Я навожу порядок в себе, могу быть неряшливым человеком'],
		['Я беру на себя ответственность и отвожу приказы. Строгий и контролирующий лидер', [aTe, RA(aTi)],
			'В контроле не заинтересован. Сдержанный и менее жёсткий лидер'],
		['Моё мышление более вербально/словесно и объективно', [aTe, RA(aTi)],
			'Моё мышление более абстрактно/субъективно и невербально'],
		['Моё мышление работает относительно внешних принципов (универсально)', [aTe, RA(aTi)],
			'Моё мышление работает относительно личной логической системы (ситуативно)'],
		//['Моё мышление иерархическое и стандартизированое', [aTe, RA(aTi)],
		//	'Моё мышление независимое и структурированое'],
		['Знания - способ быть компетентным. Я могу накапливать знания обо всем, но не факт что я буду их когда-либо использовать', [aTi, RA(aTe)],
			'Знания - инструмент, который можно использовать. Я фильтрую знания на факт их полезности лично для меня'],
		['Во время дискуссии чаще выясняю ситуацию по мере продвижения диалога и оперирую объективными фактами', [aTe, RA(aTi)],
			'Во время дискуссии чаще высказываю своё субъективное мнение и придерживаюсь его'],
		['Вижу в фактах их самостоятельную ценность', [aTe, RA(aTi)],
			'Использую факты для подтверждения собственных теорий или размышлений'],
		['Я считаю, что все люди "сделаны из одного теста"', [aFeTi, RA(aFiTe)],
			'Я считаю, что каждый человек индивидуален и уникален'],
		['В коллективном обсуждении в первую очередь я выясню мнение окружающих людей и постараюсь учесть каждое из них', [aFeTi, RA(aFiTe)],
			'В коллективном обсуждении в первую очередь я выясню, кто что хочет и как мы можем добиться нужных результатов'],
		['В стрессе я чувствую, что мнения других людей приводят только к конфликтам и разрушениям гармонии, поэтому я стараюсь разрешить конфликты и в какой-то мере привить остальным людям нормы морали для избежания подобных ситуаций', [aFeTi, RA(aFiTe)],
			'В стрессе я чувствую, что люди вокруг слишком ранимы, что их позиция слишком предвзята, и это мешает мне объективно оценивать ситуацию, поэтому я пытаюсь установить систему контроля или продвигать факты для поддержания порядка'],
		['Мир кажется очень живым, а я в нём - маленький вкладчик в этот мир', [aFeTi, RA(aFiTe)],
			'Мир очень безличный и жёсткий, а я - уязвимый и хрупкий набор потребностей, который должен выживать, чтобы привнести что-то в этот мир'],
		['Мои наблюдения основаны на одной точке зрения, которая даёт наибольшую отдачу по отношению к текущей ситуации', [aNiSe, RA(aNeSi)],
			'Мои наблюдения основаны на нескольких перспективах'],
		['У меня есть тенденция чрезмерно фиксироваться на каких-то объектах, темах или мыслях', [aNiSe, RA(aNeSi)],
			'Я не слишком привязан к рассматриваемым мною объектам, темам и мыслям, зато обладаю неплохой широтой обзора'],
		['Важно сфокусироваться на одном и принимать решения, приносящие пользу здесь и сейчас', [aNiSe, RA(aNeSi)],
			'Важно быть осторожным и иногда даже дотошным, чтобы внести свой вклад в систему, которая может быть и не так полезна здесь и сейчас, но безусловно будет таковой в будущем'],
		['Я стремлюсь представить или обнаружить один путь решения проблемы, построенный на моих различных впечатлениях о вещах', [aNiSe, RA(aNeSi)],
			'Я стремлюсь обнаружить, сопоставить или понять истинную природу вещей, составляя объединяющие элементы между различными творческими взглядами на вещи'],
		['Если бы я строил дом, то сначала разработал бы план постройки, а потом искал методы реализации', [aFeTi, RA(aFiTe)],
			'Если бы я строил дом, то использовал бы уже имеющиеся инструменты'],
	]],
	['Головокружение', 'Опиши головокружение и сравни его с четырьмя примерами', 4, 1, [
		['Описывая головокружение, я привожу подробные ассоциации, связанные с моими ощущениями', [aNeV, aSiV]],
		['Описывая головокружение, я обращаю внимание на всплывающие в моей голове внутренние образы, мысли, на визуализированные внутренние объекты (Например: "Головокружение ощущается как размытое кистью изображение", "Когда я описывал головокружение, в моей голове всплыла картинка человечка из комикса со звёздочками вокруг своей головы")', [aNiV, aSeV]],
		['Описание головокружение вызывает у меня трудности, обычно я просто перечисляю основные физические ощущения', [aNiV, aSeV]],
		['Описывая головокружение, я рассказываю точные подробные физические ощущения, расписывая их до мелочей', [aNeV, aSiV]],
	]],
	/*['Когнитивные оси и метод исключения', 'Предпочтения функций по каждой оси', 4, 1, [
		['Часто рассматриваю последствия и непредвиденные обстоятельства', [aNiP]],
		['Исследую более глубокий смысл', [aNiP]],
		['Наслаждаюсь рутиной и планированием', [aSiP]],
		['Отдаю приоритет полному плану', [aSiP]],
		['Небрежно отношусь к деталям', [aNeP]],
		['Нереалистичен и непрактичен', [aNeP]],
		['Счастлив жить жизнью по прихотям и побуждениям', [aSeP]],
		['Наслаждаюсь простым разговором', [aSeP]],
		['Опасаюсь критики', [aFeP]],
		['Не хочу быть отвергнутым другими', [aFeP]],
		['Могу работать, даже если несчастлив', [aTeP]],
		['Ценю людей только за полезность', [aTeP]],
		['Собственные желания имеют наибольший приоритет', [aFiP]],
		['Мне бывает сложно объяснить свои ценности', [aFiP]],
		['Одиночка', [aTiP]],
		['Мне бывает сложно объяснить ход мыслей', [aTiP]],
		['Я не тактилен', [aSeM]],
		['Избегаю рискованного поведения', [aSeM]],
		['Игнорирую конкретные доказательства', [aSeM]],
		['Нет новых идей', [aNeM]],
		['Отказываюсь от новых возможностей', [aNeM]],
		['Не могу мыслить или мечтать масштабно', [aNeM]],
		['Не люблю авторитет', [aSiM]],
		['Отвергаю прошлое обучение или опыт', [aSiM]],
		['Соблюдение процедур - проблема', [aSiM]],
		['Не размышляю о вариантах будущего', [aNiM]],
		['Не думаю о призвании или цели', [aNiM]],
		['Не нужна структура', [aNiM]],
		['Противоречия не интересуют', [aTiM]],
		['Легко запутываюсь', [aTiM]],
		['Полагаюсь на порядок и структуру', [aTiM]],
		['Нечеткое моральное суждение', [aFiM]],
		['Осторожен к эмоциональной интенсивности', [aFiM]],
		['Чувства предвзяты и ненадёжны', [aFiM]],
		['Не являюсь ни лидером, ни планировщиком', [aTeM]],
		['Медленнен и нерешителен', [aTeM]],
		['Задумываюсь о вреде от фактов', [aTeM]],
		['Не знаю о социальных проблемах', [aFeM]],
		['Ставлю логику в приоритет чувствам других', [aFeM]],
		['Решаю проблемы знаниями, а не общением', [aFeM]],
	]],*/
	['Лупы (в разработке)', 'Лупы - это стрессовое использование первой и третьей функций с игнорированием второй. Луп проявляется при слабом стрессе', 4, 1, [
		['Я начинаю терять интерес к своим хобби, не интересуюсь им так, как раньше. То погружаюсь в них, то снова забываю и так по кругу', [alNiFe, alNiTe]],
		['Я приобретаю нигилистический, опустошенный взгляд на мир и людей', [alNiFe, alNiTe]],
		['Я теряю связь с внешним миром', [alNiFe, alNiTe]],
		['Я слишком много анализирую и делаю из хорошего плохое', [alNiFe]],
		['Я начинаю думать, что "ничего не имеет значения" и задаваться вопросом "в чем вообще смысл всего этого?"', [alNiFe]],
		['Иногда в стрессовом состоянии я пытаюсь учить людей жизни и убеждать их принять другое, удобное для меня мнение "ради его близких" (манипулирую)', [alNiFe]],
		['Я отдаляюсь от людей и отвергаю любую помощь или поддержку', [alNiFe]],
		['Начинаю думать, что "Я - неудачник и никогда не смогу жить так, как хочу" либо "Этот мир мне противен и это общество насквозь прогнило"', [alNiTe]],
		['Я начинаю смотреть на других людей свысока и считать их "непригодными" или просто не соответствующими моим личным стандартам', [alNiTe]],
		['Я начинаю слишком часто пересматривать одни и те же факты и идеи', [alNiTe]],
		['Я теряю способность мыслить логически и погружаюсь в свои эмоции, что неприятно для меня', [alNiTe]],
		['Чрезмерно фокусируюсь на веселье', [alNeTi]],
		['Нуждаюсь в социальном одобрении и избегаю критики шутками', [alNeTi]],
		['Становлюсь неорганизованным', [alNeTi]],
		['В какой-то степени могу предсказать, как мои слова могут повлиять на других, и пользуюсь этим для того, чтобы повлиять на людей', [alNeTi]],
		['Постоянно пытаюсь представить, как выглядела бы моя "идеальная версия"', [alNeTi]],
		['Постоянно ищу одобрения, но мне всегда недостаточно', [alNeTi]],
		['Ставлю нужды других людей превыше того, что логично', [alNeTi]],
		['Ставлю себе множество целей для достижения успеха и забрасываю половину из них на полпути', [alNeFi]],
		['Сильная и необдуманная реакция на предполагаемые "оскорбления"', [alNeFi]],
		['Трачу своё время на тяжёлую работу, которая не приносит ни удовольствия, ни пользы, ради образа и ощущения "занятого человека"', [alNeFi]],
		['Реализую свои проекты не эффективными, а наиболее быстрыми способами (и часто ошибаюсь из-за этого)', [alNeFi]],
		['Постоянно сравниваю себя с другими', [alNeFi]],
		['Пытаюсь добиться цели, хотя на самом деле даже не уверен, существует ли эта цель на самом деле', [alNeFi]],
		['Перестаю заботиться о себе, могу не спать и не есть, трачу всю энергию на работу', [alNeFi]],
		['Когда кто-то задевает мои чувства, я начинаю строить "теории заговора" и считаю, что обидчик был преднамеренно враждебным (даже если очевидно, что это не так)', [alSiTe]],
		['Придерживаюсь привычного, упираюсь и отвергаю все, что противоречит моему мировоззрению', [alSiTe]],
		['Могу отклонять новые концепции, которые кажутся вполне приемлемыми, просто чтобы не иметь проблем со внутренними неудобными чувствами', [alSiTe]],
		['Постоянно думаю обо всех ситуациях в прошлом, которые пошли не так и обо всех вещах, которые оказались неправильными', [alSiTe]],
		['Прошлое оказалось наполнено ошибками, поэтому я не могу и не хочу двигаться дальше', [alSiTe]],
		['Новый опыт и ощущения кажутся пугающими, для меня будет лучше остаться в своей комфортной зоне', [alSiTe]],
		['Не могу планировать новые вещи и фокусируюсь только на тех задачах, которые могу с лёгкостью выполнить', [alSiTe]],
		['Становлюсь непривычно холодным и резко критичным по отношению к близким людям', [alSiFe]],
		['Я не хочу заботиться о чувствах "недостойного" человека, поэтому я выясню все его "недостойные" черты', [alSiFe]],
		['Отгораживаюсь от эмоционального багажа других людей и прячусь в свою зону комфорта', [alSiFe]],
		['Отказываюсь принимать и прощать себя за ошибки', [alSiFe]],
		['Становлюсь ужасным перфекционистом (и это мешает мне жить)', [alSiFe]],
		['Отказываюсь от собственных чувств и ценностей в пользу интеллекта и логики', [alSiFe]],
		['Пытаюсь объяснить свой жизненный выбор или свои мысли с ясностью', [alSiFe]],
		['Слишком быстро воплощаю свои цели в жизни, не обдумываю их и не рассматриваю долгосрочные последствия своих решений', [alTeNi]],
		['Испытываю острую потребность убежать от проблемных ситуаций', [alTeNi]],
		['Сосредотачиваюсь на своем имидже и воспринимаю такие вещи, как количество друзей, покупку дорогих вещей и т.п. как подлинные примеры успеха', [alTeNi]],
		['Избегаю самоанализа из-за страха, что мне не понравится то, что я узнаю', [alTeNi]],
		['Убеждаю себя, что я проницателен, могу и знаю больше остальных для того, чтобы не ощущать собственную неполноценность', [alTeNi]],
		['Прячусь от своих чувств и основываю свой смысл жизни на потворстве своим желаниям', [alTeNi]],
		['Становлюсь нетерпеливым, капризным и вспыльчивым', [alTeNi]],
		['Отключаю внутренний голос и принимаю поспешные жизненные решения', [alTeSi]],
		['Разрываю любые отношения с людьми, которые пытаются давать мне советы или указывать', [alTeSi]],
		['Обвиняю других людей в своих проблемах, дискомфорте', [alTeSi]],
		['Манипулирую данными, чтобы обвинить других в своих собственных негативных чувствах', [alTeSi]],
		['Излишне подозреваю других людей в скрытых намерения и мотивах', [alTeSi]],
		['Не могу учиться на своих прошлых ошибках', [alTeSi]],
		['Формирую преждевременные суждения', [alTeSi]],
		['Я гоняюсь за весельем и азартом', [alSeTi]],
		['Я преувеличиваю, чтобы выглядеть более впечатляюще', [alSeTi]],
		['Я зацикливаюсь на имидже и внешнем восприятии успеха', [alSeTi]],
		['Я использую юмор или эмоции для отражения критики', [alSeTi]],
		['Я могу импульсивно реагировать', [alSeTi]],
		['Я отказываюсь от критического анализа', [alSeTi]],
		['У меня присутствует необходимость быть в центре внимания', [alSeTi]],
		['Я делаю слишком поспешные выводы', [alFeSi]],
		['Я стремлюсь к новому опыту и удовольствиям, чтобы скрыть своё чувство незащищённости или недовольства', [alFeSi]],
		['Я создаю драму, чтобы получить кайф от волнения', [alFeSi]],
		['Я проецирую вину и дискомфорт на других', [alFeSi]],
		['У меня появляется множества случайных и поверхностных знакомств', [alFeSi]],
		['Я повторяю одни и те же ошибки снова и снова, не извлекая уроки из них.', [alFeSi]],
		['Я манипулирую информацией для обоснования своих выводов', [alFeSi]],
		['Я застреваю в своей зоне комфорта', [alFiNe]],
		['Я скрываю свою истинную природу от других', [alFiNe]],
		['Я чрезмерно избегаю риска', [alFiNe]],
		['Туннельное зрение: я теряю способность представлять другие перспективы, хотя раньше она была', [alFiNe]],
		['Я слишком много думаю о прошлом', [alFiNe]],
		['Я становлюсь чрезмерно самокритичным', [alFiNe]],
		['Я слишком сильно концентрируюсь на своих ценностях', [alFiNe]],
		['Я выбираю лёгкий путь вместо долгосрочного, который принесёт долгосрочное значение', [alSeFi]],
		['Я становлюсь упрямым и требовательным', [alSeFi]],
		['У меня появляется напористость и агрессия, чтобы защитить свое эго', [alSeFi]],
		['Мне хочется сразу выполнить все дела, которые у меня есть', [alSeFi]],
		['Я теряю связь с тем, что для меня (лично) важно', [alSeFi]],
		['Я скрыто управляю другими и верю в то, что все остальные слишком ленивы и медлительны', [alSeFi]],
		['Я основываю свою самооценку на внешних достижениях', [alSeFi]],
		['Я жалуюсь на сложные ситуации, но никак их не решаю', [alFiSe]],
		['У меня появляется способность мыслить, выходя за рамки каких-либо предопределенных способностей человеческого существа', [alFiSe]],
		['У меня появляется склонность к непринятии «стадного мнения» без причины', [alFiSe]],
		['Я утрачиваю связь со своим обычно реалистичным, прагматичным взглядом на вещи', [alFiSe]],
		['Я подгоняю факты под шаблон, даже если в этом нет смысла', [alFiSe]],
		['У меня появляется паранойя и страх будущего', [alFiSe]],
		['У меня развивается чувство беспокойства по поводу своей способности справляться с будущим', [alFiSe]],
		['Я не могу терпеть одиночество', [alFeNi]],
		['Я гоняюсь за эмоциональными подъёмами и острыми ощущениями, не обращая внимания на долгосрочные последствия', [alFeNi]],
		['Мой выбор «фактов» для подтверждения своих суждений несерьёзный', [alFeNi]],
		['Делаю поспешные выводы', [alFeNi]],
		['Я гоняюсь за поверхностными маркерами успеха и зацикливаюсь на «имидже»', [alFeNi]],
		['У меня развивается нетерпеливое отношение к людям, особенно к интровертам', [alFeNi]],
		['Я могу стать капризным и жестоким', [alFeNi]],
		['Я отступаю от мира и у меня появляется неспособность обосновывать свои теории на реальном опыте', [alTiNe]],
		['У меня появляется стремление или нерешительность пробовать что-то новое', [alTiNe]],
		['Мне крайне не нравится риск', [alTiNe]],
		['Я полагаюсь на вредные привычки или комфорт в ущерб своим обязанностям', [alTiNe]],
		['Я избегаю человеческие связи, даже когда я на самом деле этого хочу', [alTiNe]],
		['Я становлюсь «диванным критиком» по многим вопросам, не проверяя их достоверность в окружающем мире', [alTiNe]],
		['У меня появляется чувство, что я трачу жизнь впустую', [alTiNe]],
		['У меня мрачный взгляд на будущее', [alTiSe]],
		['Я развиваю самоубийственное отношение как оправдание того, что я не пытаюсь и не упорствую', [alTiSe]],
		['Я становлюсь и отшельником', [alTiSe]],
		['У меня возникает чувство, что никто не может меня понят', [alTiSe]],
		['У меня отсутствует интерес к новым занятиям и возможностям', [alTiSe]],
		['Я использую козлов отпущения, чтобы обвинить в своих неудачах', [alTiSe]],
		['Я становлюсь очень тревожным', [alTiSe]],
	]],
	['Грипы', 'Грипы - это стрессовое использование только четвертой функции. Грип проявляется при сильном стрессе', 4, 1, [
		['Пытаюсь подавить свои сильные эмоции, стремящиеся вырваться наружу', [agFi]],
		['Набрасываюсь на других из-за чувства несправедливости', [agFi]],
		['Чувствую, будто меня недооценивают и воспринимают как должное', [agFi]],
		['Становлюсь очень дезорганизованным', [agFi]],
		['Становится трудно выразить словами свои чувства и эмоции', [agFi]],
		['Сильные эмоции, с которыми я не привык справляться, охватывают меня целиком', [agFi]],
		['Чувствую, будто каждый против меня, будто все хотят на меня напасть и пытаюсь защищаться', [agFi]],
		['Становлюсь зацикленным на своих отношениях и боюсь, что потеряю близких мне людей', [agFe]],
		['Чувствую себя оторванным и изолированным от других', [agFe]],
		['Эмоционально сверхчувствителен', [agFe]],
		['Появляются мысли о том, что никто никогда не сможет меня полюбить', [agFe]],
		['Ищу подтверждения и одобрения от других людей. Иногда у меня появляется привычка хвастаться', [agFe]],
		['Вступаю в нездоровые, зависимые отношения', [agFe]],
		['Становлюсь обидчивым, чувствительным и сентиментальным, что в обычном состоянии для меня непривычно', [agFe]],
		['Становлюсь циничным и саркастичным по отношению к другим людям, теряю свою эмпатию', [agTi]],
		['Критикую окружающих и делаю им едкие замечания', [agTi]],
		['Чувствую себя неловко из-за того, что вышел из-под контроля, дал своей темной стороне выйти наружу', [agTi]],
		['Ищу абсолютную истину для решения своих проблем', [agTi]],
		['Ставлю барьер между собой и близкими', [agTi]],
		['Становлюсь очень самокритичным и разочарованным в самом себе', [agTi]],
		['Создаю себе образ другого человека и подавляю свои эмоции ради поддержания этого образа', [agTi]],
		['Раздражает нытьё других людей', [agTe]],
		['Цель оправдывает средства', [agTe]],
		['Если вижу успех другого человека, хочу всем доказать, что я – гораздо лучше, чем он', [agTe]],
		['Часами напролёт усердно работаю для достижения цели, напрочь забывая об отдыхе', [agTe]],
		['Многие люди кажутся беспомощными', [agTe]],
		['Одержимость быть лучше всех', [agTe]],
		['Точно знаю, чего хочу, и уверен в том, что это получу', [agTe]],
		['Начинается поток ужасных неконтролируемых мыслей', [agNi]],
		['Продумываю в голове самые худшие сценарии развития событий', [agNi]],
		['Менее терпим и легче раздражаюсь', [agNi]],
		['Становлюсь очень подозрительным ко всему', [agNi]],
		['Становлюсь рассеянным и забывчивым', [agNi]],
		['Постоянное плохое предчувствие', [agNi]],
		['Отвлекаюсь на тревожные внутренние образы', [agNi]],
		['Теряю способность видеть и замечать детали', [agNe]],
		['Становлюсь импульсивным', [agNe]],
		['Беспокоюсь обо всех возможных вариантах того, что может пойти не так', [agNe]],
		['Придумываю новые непроверенные и непрактичные идеи и возможности в надежде решить проблемы', [agNe]],
		['Постоянное ощущение опасности и надвигающейся гибели', [agNe]],
		['Чувствую замешательство, панику, тревогу и растерянность', [agNe]],
		['Становлюсь менее ответственным, чем обычно', [agNe]],
		['Появляется сильное желание изменить прошлое: "Если бы я поступил иначе, этого бы не произошло..."', [agSi]],
		['Ощущение, будто я упустил нечто хорошее', [agSi]],
		['Неприязнь к "себе из прошлого"', [agSi]],
		['Становлюсь параноиком; очень критичен ко всему, иногда дотошный', [agSi]],
		['Слишком осведомлён о своем физическом самочувствии, чувствую себя больным; возможно чрезмерно беспокоюсь о своём здоровье', [agSi]],
		['Часто преувеличиваю проблемы', [agSi]],
		['Стремлюсь к стабильности для того, чтобы почувствовать безопасность, хотя раньше такого за собой не замечал (только в стрессе)', [agSi]],
		['Торопливость и импульсивность', [agSe]],
		['Паникую и могу впасть в истерику', [agSe]],
		['Слишком налегаю на еду', [agSe]],
		['Уделяю внимание телу (длительный душ/ванные, уход за собой)', [agSe]],
		['Становлюсь агрессивным: могу сильно повысить голос на человека и нагрубить', [agSe]],
		['Тянет на причинение себе вреда (порезы, алкоголь)', [agSe]],
		['Совершаю необдуманные поступки (например, трачу деньги на ненужные вещи)', [agSe]],
	]],
	/*['Трикстер (седьмая функция)', 'Перевод теста ' + link('https://bunnytypology.github.io/tricksterfunctiontest/', 'bunnytypology'), 4, 1, [
		['Не рассказываю хорошую идею, поскольку считаю, что её могут посчитать грубой', [aFiT]],
		['В описаниях слишком конкретен', [aFiT]],
		['Говорил "Не верю этому!"', [aFiT]],
		['Уверен, что с каждым в силах подружиться', [aFiT]],
		['Нехорошо ненавидеть людей', [aFiT]],
		['Слишком безразличен, чтобы ненавидеть', [aFiT]],
		['Сделал что-то плохое с точки зрения морали в прошлом и не стыжусь', [aFiT]],
		['Ощущаю себя внутри почти всегда не так, как показываю', [aFiT]],
		['Меня называли оскорбительным', [aFiT]],
		['Слабое ощущение внутренней идентичности', [aFiT]],
		['Отколоняю мораль и предрассудки в качестве доказательств', [aFiT]],
		['Говорил "Я не так выразился"', [aTiT]],
		['Много разных идей, а структуры нет', [aTiT]],
		['Противоречу прошлым своим утверждениям, выясняя общую картину', [aTiT]],
		['Если со мной кто-то не согласен, говорю "Ты прав, но и я тоже"', [aTiT]],
		['Другие слишком много времени уделяют деталям, не имеющим значение', [aTiT]],
		['Быстро теряю интерес', [aTiT]],
		['Предпочту работать быстро в ущерб качеству', [aTiT]],
		['Сожалею о большинстве выборов', [aTiT]],
		['Не наслаждаюсь обсуждением несвязанных с моим представлением реального мира теорий', [aTiT]],
		['Ставлю под сомнение правдивость переусложнённых теорий', [aTiT]],
		['Мне некомфортно раскрывать источники своих знаний', [aTiT]],
		['Все вокруг слишком ленятся', [aSiT]],
		['Неуверенность в своей внешности', [aSiT]],
		['Забываю о важных деталях, но мелкие запомню', [aSiT]],
		['Меня можно назвать трудоголиком', [aSiT]],
		['Другие слишком завязаны на комфорте', [aSiT]],
		['Часто не понимаю своё состояние здоровья', [aSiT]],
		['Все вокруг живут в прошлом', [aSiT]],
		['Ставлю под сомнение обоснованность традиций', [aSiT]],
		['Мне говорили, что я одеваюсь не по погоде (в одной футблоке в снег, например)', [aSiT]],
		['Часто забываю поесть', [aSiT]],
		['Ощущаю себя больным, но лечить себя - не первостепенная задача', [aSiT]],
		['Не понимаю метафоры', [aNiT]],
		['Сложно понимать сарказм', [aNiT]],
		['Говорил "Я бы не стал так делать, если бы мне сказали раньше"', [aNiT]],
		['Притворяюсь, что знаю, о чём говорит собеседник', [aNiT]],
		['Без инструкции у меня возникают затруднения в достижении желаемого', [aNiT]],
		['Меня называли ветреным', [aNiT]],
		['Мне сложно оценить последствия действий', [aNiT]],
		['Меня называли традиционным', [aNiT]],
		['При ограниченном времени вхожу в стресс', [aNiT]],
		['Мне не нравится обсуждение возможных вариантов будущего', [aNiT]],
		['Прихожу или слишком рано, или с большим опозданием', [aNiT]],
		['Говорил "Извини, не обратил внимания"', [aSeT]],
		['Мне трудно быстро подойти к заключению', [aSeT]],
		['У меня проблемы с мотивацией', [aSeT]],
		['Слишком многое вышло из под контроля', [aSeT]],
		['У меня бывают частые приступы апатии', [aSeT]],
		['Часто говорю "Не всё так просто"', [aSeT]],
		['Люди слишком зациклены на материальном', [aSeT]],
		['Меня называют осторожным', [aSeT]],
		['Люди слишком требовательны', [aSeT]],
		['Могу выпадать из реальности', [aSeT]],
		['Мне некомфортно быть авторитетом', [aSeT]],
		['Мозговой штурм нескольких идей сразу мне не по душе', [aNeT]],
		['Все вокруг думают только о возможностях, а должны о том, что происходит сейчас', [aNeT]],
		['Говорил "Ну и что теперь делать?"', [aNeT]],
		['Предпочитаю держать идеи при себе', [aNeT]],
		['Меня называют обычным', [aNeT]],
		['Сначала факты и доказательства, а потом уже теория', [aNeT]],
		['У меня устоявшиеся взгляды', [aNeT]],
		['К изменениям в планах сложно адаптироваться', [aNeT]],
		['Меня можно назвать строгим', [aNeT]],
		['Не важно, к лучшему или к худшему, но я полностью придерживаюсь своих решений', [aNeT]],
		['Мне не нравятся открытые вопросы', [aNeT]],
		['Часть отменяю планы из-за плохого планирования', [aTeT]],
		['Меня считают перфекционистом', [aTeT]],
		['Хоть я и организованный, другие считают мою систему неэффективной', [aTeT]],
		['Сложно воспринимать данные, пока они не организованы', [aTeT]],
		['У меня есть сложности с восприятием фактов, которые нельзя никуда приткнуть', [aTeT]],
		['Говорил "Объективно мне стоит сделать (что-то), но..."', [aTeT]],
		['Не воспринимаю критику близко к сердцу', [aTeT]],
		['Без детального плана и системы не могу выполнять работу', [aTeT]],
		['Боюсь, что другие узнают, что они в чём-то не правы', [aTeT]],
		['Не доверяю реальности', [aTeT]],
		['Слишком подробно отношусь к несущественным вещам. Все факты имеют значение', [aTeT]],
		['Затрудняюсь рассматривать чужие проблемы как собственные', [aFeT]],
		['У меня бывают случайные выбросы эмоций', [aFeT]],
		['Меня называют невосприимчивым', [aFeT]],
		['Не чувствую эмоциональной атмосферы', [aFeT]],
		['Меня называли эгоистичным', [aFeT]],
		['Не доверяю социальным тонкостям', [aFeT]],
		['Люди слишком озабочены чувствами других', [aFeT]],
		['Меня называют невежливым', [aFeT]],
		['Мне сложно оценить влияние своих слов и действий на других', [aFeT]],
		['Я предпочитаю серьезные разговоры', [aFeT]],
		['Мне сложно шутить', [aFeT]],
	]],*/
]

eval(create_question_sets)

function recalc() {
	str = ''

	Ni = 0, Ne = 0, Si = 0, Se = 0, Fi = 0, Fe = 0, Ti = 0, Te = 0
	NiSe = 0, NeSi = 0, FiTe = 0, FeTi = 0
	NiP = 0, NeP = 0, SiP = 0, SeP = 0, FiP = 0, FeP = 0, TiP = 0, TeP = 0
	NiV = 0, NeV = 0, SiV = 0, SeV = 0
	lNiFe = 0, lNiTe = 0, lNeFi = 0, lNeTi = 0
	lSiFe = 0, lSiTe = 0, lSeFi = 0, lSeTi = 0
	lFiNe = 0, lFiSe = 0, lFeNi = 0, lFeSi = 0
	lTiNe = 0, lTiSe = 0, lTeNi = 0, lTeSi = 0
	gNi = 0, gNe = 0, gSi = 0, gSe = 0, gFi = 0, gFe = 0, gTi = 0, gTe = 0

	str += h3('Исходный результат')
	eval(pull_results)

	str += p('Когнитивные функции')
	str += table([
		tr([th('Ni'), th('Ne'), th('Si'), th('Se'), th('Fi'), th('Fe'), th('Ti'), th('Te'), th('Группа')]),
		tr([td( Ni ), td( Ne ), td( Si ), td( Se ), td( Fi ), td( Fe ), td( Ti ), td( Te ), td('Сравнение по осям')]),
		tr([td( NiP), td( NeP), td( SiP), td( SeP), td( FiP), td( FeP), td( TiP), td( TeP), td('Сравнение внутри оси')]),
		tr([td( NiV), td( NeV), td( SiV), td( SeV), td('--'), td('--'), td('--'), td('--'), td('Головокружение')]),
	])

	str += p('Когнитивные оси')
	str += table([
		tr([th('NiSe'), th('NeSi'), th('FiTe'), th('FeTi')]),
		tr([td( NiSe ), td( NeSi ), td( FiTe ), td( FeTi )]),
	])

	names = new Map()
	names.set('INTJ', 'Стратег')
	names.set('INTP', 'Учёный')
	names.set('ENTJ', 'Командир')
	names.set('ENTP', 'Полемист')
	names.set('INFJ', 'Активист')
	names.set('INFP', 'Посредник')
	names.set('ENFJ', 'Тренер')
	names.set('ENFP', 'Борец')
	names.set('ISTJ', 'Администратор')
	names.set('ISFJ', 'Защитник')
	names.set('ESTJ', 'Менеджер')
	names.set('ESTP', 'Консул')
	names.set('ISTP', 'Виртуоз')
	names.set('ISFP', 'Артист')
	names.set('ESTP', 'Делец')
	names.set('ESFP', 'Развлекатель')

	// Normalize NeNiSeSi and FeFiTeTi (make same maximum)

	// 16cogn + 6axNS + 6axFT + 10cogP + 5loop + 5grip + 14vert
	// cogn: -1 to 2; up to 7 qs -> range -7 to 14 -> apply -112 to 224
	// axNS: -1 to 2; up to 4 qs -> range -4 to  8 -> apply  -24 to 48
	// axFT: -1 to 2; up to 5 qs -> range -5 to 10 -> apply  -30 to 60
	// cogP: -1 to 2; up to 0 qs -> range  0 to  0 -> apply    0 to 0
	// loop: -1 to 2; up to 7 qs -> range -7 to 14 -> apply  -35 to 70
	// grip: -1 to 2; up to 7 qs -> range -7 to 14 -> apply  -35 to 70
	// vert: -1 to 2; up to 1 qs -> range -1 to  2 -> apply  -14 to 28
	// sum:                                        -> apply -250 to 500

	//   7dom + 5aux + 3ter + 1inf + 6domax + 6auxax + 6domp + 4auxp + 5loop   + 5grip + 7domv, 'type'
	mbti = [
		[7*Ni + 5*Fe + 3*Ti + 1*Se + 6*NiSe + 6*FeTi + 6*NiP + 4*FeP + 5*lNiFe + 5*gSe + 7*NiV, 'INFJ'],
		[7*Ni + 5*Te + 3*Fi + 1*Se + 6*NiSe + 6*FiTe + 6*NiP + 4*TeP + 5*lNiTe + 5*gSe + 7*NiV, 'INTJ'],
		[7*Fi + 5*Ne + 3*Si + 1*Te + 6*FiTe + 6*NeSi + 6*FiP + 4*NeP + 5*lFiNe + 5*gTe + 7*NeV, 'INFP'],
		[7*Ti + 5*Ne + 3*Si + 1*Fe + 6*FeTi + 6*NeSi + 6*TiP + 4*NeP + 5*lTiNe + 5*gFe + 7*NeV, 'INTP'],
		[7*Si + 5*Fe + 3*Ti + 1*Ne + 6*NeSi + 6*FeTi + 6*SiP + 4*FeP + 5*lSiFe + 5*gNe + 7*SiV, 'ISFJ'],
		[7*Si + 5*Te + 3*Fi + 1*Ne + 6*NeSi + 6*FiTe + 6*SiP + 4*TeP + 5*lSiTe + 5*gNe + 7*SiV, 'ISTJ'],
		[7*Fi + 5*Se + 3*Ni + 1*Te + 6*FiTe + 6*NiSe + 6*FiP + 4*SeP + 5*lFiSe + 5*gTe + 7*SeV, 'ISFP'],
		[7*Ti + 5*Se + 3*Ni + 1*Fe + 6*FeTi + 6*NiSe + 6*TiP + 4*SeP + 5*lTiSe + 5*gFe + 7*SeV, 'ISTP'],
		[7*Fe + 5*Ni + 3*Se + 1*Ti + 6*FeTi + 6*NiSe + 6*FeP + 4*NiP + 5*lFeNi + 5*gTi + 7*NiV, 'ENFJ'],
		[7*Te + 5*Ni + 3*Se + 1*Fi + 6*FiTe + 6*NiSe + 6*TeP + 4*NiP + 5*lTeNi + 5*gFi + 7*NiV, 'ENTJ'],
		[7*Ne + 5*Fi + 3*Te + 1*Si + 6*NeSi + 6*FiTe + 6*NeP + 4*FiP + 5*lNeFi + 5*gSi + 7*NeV, 'ENFP'],
		[7*Ne + 5*Ti + 3*Fe + 1*Si + 6*NeSi + 6*FeTi + 6*NeP + 4*TiP + 5*lNeTi + 5*gSi + 7*NeV, 'ENTP'],
		[7*Fe + 5*Si + 3*Ne + 1*Ti + 6*FeTi + 6*NeSi + 6*FeP + 4*SiP + 5*lFeSi + 5*gTi + 7*SiV, 'ESFJ'],
		[7*Te + 5*Si + 3*Ne + 1*Fi + 6*FiTe + 6*NeSi + 6*TeP + 4*SiP + 5*lTeSi + 5*gFi + 7*SiV, 'ESTJ'],
		[7*Se + 5*Fi + 3*Te + 1*Ni + 6*NiSe + 6*FiTe + 6*SeP + 4*FiP + 5*lSeFi + 5*gNi + 7*SeV, 'ESFP'],
		[7*Se + 5*Ti + 3*Fe + 1*Ni + 6*NiSe + 6*FeTi + 6*SeP + 4*TiP + 5*lSeTi + 5*gNi + 7*SeV, 'ESTP'],
	]
	mbti.sort(function(a,b) { if (a[0] - b[0] != 0) return a[0] - b[0]; return a[1] < b[1];})
	str += h3('Тип по когнитивкам')
	str += p('Самый вероятный тип имеет наибольший счёт')
	col_names1 = [td('Тип')]
	col_vals1 = [td('Счёт')]
	for (i = 0; i < 8; i += 1) {
		name = mbti[i][1]
		val = parseInt(mbti[i][0])
		col_names1.push(td(name))
		col_vals1.push(td(val))
	}
	col_empty = [td('')]
	col_names2 = [td('Тип')]
	col_vals2 = [td('Счёт')]
	for (i = 8; i < 16; i += 1) {
		name = mbti[i][1]
		val = parseInt(mbti[i][0])
		col_names2.push(td(name))
		col_vals2.push(td(val))
		col_empty.push(td(''))
	}
	str += table([tr(col_names1), tr(col_vals1), tr(col_empty), tr(col_names2), tr(col_vals2)])
	str += p('Наиболее вероятный тип по когнитивным функциям: ' + bold(mbti[15][1]) + ' (' + names.get(mbti[15][1]) + '). [Версия теста 220804.02]')
	str += p('Возможный разброс баллов от -250 до 500, набранный разброс от ' + mbti[0][0] + ' до ' + mbti[15][0] + ': величина разброса ' + (mbti[15][0] - mbti[0][0]))
	str += p('Результат достовернее, если общий разброс больше, максимум больше, отрыв максимума от соседних типов сильнее')

	str += h3('Лупы и грипы')
	str += p('TODO: допилить описание и разлить воды по типу "ты в лупе как ЕНТП а в грипе как ИНФП" и добавить сортировку')
	str += table([
		tr([th('Тип' ), td('NiFe'), td('NiTe'), td('NeFi'), td('NeTi'), td('SiFe'), td('SiTe'), td('SeFi'), td('SeTi')]),
		tr([th('Луп' ), td(lNiFe ), td(lNiTe ), td(lNeTi ), td(lNeTi ), td(lSiFe ), td(lSiTe ), td(lSeFi ), td(lSeTi )]),
		tr(col_empty),
		tr([th('Тип' ), td('FiNe'), td('FiSe'), td('FeNi'), td('FeSi'), td('TiNe'), td('TiSe'), td('TeNi'), td('TeSi')]),
		tr([th('Луп' ), td(lFiNe ), td(lFiSe ), td(lFeNi ), td(lFeSi ), td(lTiNe ), td(lTiSe ), td(lTeNi ), td(lTeSi )]),
	])
	str += table([
		tr([th('Тип' ), td('Ni inf'), td('Ne inf'), td('Si inf'), td('Se inf'), td('Fi inf'), td('Fe inf'), td('Ti inf'), td('Te inf')]),
		tr([th('Грип'), td(gNi     ), td(gNe     ), td(gSi     ), td(gSe     ), td(gFi     ), td(gFe     ), td(gTi     ), td(gTe     )]),
	])

	document.getElementById('res').innerHTML = str
}

recalc();  // Initial recalc
