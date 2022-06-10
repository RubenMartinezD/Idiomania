-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2022 a las 20:26:57
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `idiomania`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `frases`
--

CREATE TABLE `frases` (
  `id_frase` int(10) UNSIGNED NOT NULL,
  `contenido` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `frases`
--

INSERT INTO `frases` (`id_frase`, `contenido`) VALUES
(1, 'I was starting to worry that my pet turtle could tell what I was thinking.'),
(2, 'Someone I know recently combined Maple Syrup & buttered Popcorn thinking it would taste like caramel popcorn. It didn\'\'t and they don\'\'t recommend anyone else do it either.'),
(3, 'She had some amazing news to share but nobody to share it with.'),
(4, 'She always had an interesting perspective on why the world must be flat.'),
(5, 'As he looked out the window, he saw a clown walk by.'),
(6, 'I\'\'m confused: when people ask me what\'\'s up, and I point, they groan.'),
(7, 'The door swung open to reveal pink giraffes and red elephants.'),
(8, 'The elderly neighborhood became enraged over the coyotes who had been blamed for the poodle\'\'s disappearance.'),
(9, 'Kelly wouldn\'\'t have eaten the meal if she had known what it actually was.'),
(10, 'The urgent care center was flooded with patients after the news of a new deadly virus was made public.'),
(11, 'The bullet pierced the window shattering it before missing Danny\'\'s head by mere millimeters.'),
(12, 'His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.'),
(13, 'She is never happy until she finds something to be unhappy about; then, she is overjoyed.'),
(14, 'When she didn\'\'t like a guy who was trying to pick her up, she started using sign language.'),
(15, 'Her life in the confines of the house became her new normal.'),
(16, 'Three generations with six decades of life experience.'),
(17, 'As the rental car rolled to a stop on the dark road, her fear increased by the moment.'),
(18, 'She wanted a pet platypus but ended up getting a duck and a ferret instead.'),
(19, 'I am counting my calories, yet I really want dessert.'),
(20, 'The light in his life was actually a fire burning all around him.'),
(21, 'Karen realized the only way she was getting into heaven was to cheat.'),
(22, 'Honestly, I didn\'\'t care much for the first season, so I didn\'\'t bother with the second.'),
(23, 'She saw the brake lights, but not in time.'),
(24, 'The ice-cream trucks bring back bad memories for all of us.'),
(25, 'You can\'\'t compare apples and oranges, but what about bananas and plantains?'),
(26, 'He invested some skill points in Charisma and Strength.'),
(27, 'The teenage boy was accused of breaking his arm simply to get out of the test.'),
(28, 'He\'\'s in a boy band which doesn\'\'t make much sense for a snake.'),
(29, 'You\'\'re unsure whether or not to trust him, but very thankful that you wore a turtle neck.'),
(30, 'The changing of down comforters to cotton bedspreads always meant the squirrels had returned.'),
(31, 'I may struggle with geography, but I\'\'m sure I\'\'m somewhere around here.'),
(32, 'The glacier came alive as the climbers hiked closer.'),
(33, 'He poured rocks in the dungeon of his mind.'),
(34, 'This is a Japanese doll.'),
(35, 'He figured a few sticks of dynamite were easier than a fishing pole to catch fish.'),
(36, 'He embraced his new life as an eggplant.'),
(37, 'There\'\'s no reason a hula hoop can\'\'t also be a circus ring.'),
(38, 'The bread dough reminded her of Santa Clause\'\'s belly.'),
(39, 'It\'\'s difficult to understand the lengths he\'\'d go to remain short.'),
(40, 'Everyone says they love nature until they realize how dangerous she can be.'),
(41, 'One small action would change her life, but whether it would be for better or for worse was yet to be determined.'),
(42, 'Most shark attacks occur about 10 feet from the beach since that\'\'s where the people are.'),
(43, 'The best part of marriage is animal crackers with peanut butter.'),
(44, 'Toddlers feeding raccoons surprised even the seasoned park ranger.'),
(45, 'They were excited to see their first sloth.'),
(46, 'The waitress was not amused when he ordered green eggs and ham.'),
(47, 'She found it strange that people use their cellphones to actually talk to one another.'),
(48, 'He didn\'\'t want to go to the dentist, yet he went anyway.'),
(49, 'The blue parrot drove by the hitchhiking mongoose.'),
(50, 'The spa attendant applied the deep cleaning mask to the gentleman\'\'s back.'),
(51, 'Lucifer was surprised at the amount of life at Death Valley.'),
(52, 'The near-death experience brought new ideas to light.'),
(53, 'It would have been a better night if the guys next to us weren\'\'t in the splash zone.'),
(54, 'Being unacquainted with the chief raccoon was harming his prospects for promotion.'),
(55, 'There are over 500 starfish in the bathroom drawer.'),
(56, 'Beach-combing replaced wine tasting as his new obsession.'),
(57, 'Shingle color was not something the couple had ever talked about.'),
(58, 'You have no right to call yourself creative until you look at a trowel and think that it would make a great lockpick.'),
(59, 'The mysterious diary records the voice.'),
(60, 'It\'\'s always a good idea to seek shelter from the evil gaze of the sun.'),
(61, 'She discovered van life is difficult with 2 cats and a dog.'),
(62, 'The quick brown fox jumps over the lazy dog.'),
(63, 'His mind was blown that there was nothing in space except space itself.'),
(64, 'He spiked his hair green to support his iguana.'),
(65, 'She could hear him in the shower singing with a joy she hoped he\'\'d retain after she delivered the news.'),
(66, 'He found a leprechaun in his walnut shell.'),
(67, 'He appeared to be confusingly perplexed.'),
(68, 'I\'\'m not a party animal, but I do like animal parties.'),
(69, 'With a single flip of the coin, his life changed forever.'),
(70, 'Rock music approaches at high velocity.'),
(71, 'There\'\'s a growing trend among teenagers of using frisbees as go-cart wheels.'),
(72, 'Let me help you with your baggage.'),
(73, 'Some bathing suits just shouldn\'\'t be worn by some people.'),
(74, 'Pantyhose and heels are an interesting choice of attire for the beach.'),
(75, 'He always wore his sunglasses at night.'),
(76, 'There have been days when I wished to be separated from my body, but today wasn\'\'t one of those days.'),
(77, 'His get rich quick scheme was to grow a cactus farm.'),
(78, 'You\'\'ve been eyeing me all day and waiting for your move like a lion stalking a gazelle in a savannah.'),
(79, 'Buried deep in the snow, he hoped his batteries were fresh in his avalanche beacon.'),
(80, 'The Great Dane looked more like a horse than a dog.'),
(81, 'He colored deep space a soft yellow.'),
(82, 'My dentist tells me that chewing bricks is very bad for your teeth.'),
(83, 'Edith could decide if she should paint her teeth or brush her nails.'),
(84, 'He watched the dancing piglets with panda bear tummies in the swimming pool.'),
(85, 'So long and thanks for the fish.'),
(86, 'Patrick ordered a ghost pepper pie.'),
(87, 'Watching the geriatric men\'\'s softball team brought back memories of 3 year olds playing football.'),
(88, 'They ran around the corner to find that they had traveled back in time.'),
(89, 'A song can make or ruin a person\'\'s day if they let it get to them.'),
(90, 'She lived on Monkey Jungle Road and that seemed to explain all of her strangeness.'),
(91, 'Tuesdays are free if you bring a gnome costume.'),
(92, 'It had been sixteen days since the zombies first attacked.'),
(93, 'Truth in advertising and dinosaurs with skateboards have much in common.'),
(94, 'On a scale from one to ten, what\'\'s your favorite flavor of random grammar?'),
(95, 'Art doesn\'\'t have to be intentional.'),
(96, 'Kevin embraced his ability to be at the wrong place at the wrong time.'),
(97, 'You bite up because of your lower jaw.'),
(98, 'I can\'\'t believe this is the eighth time I\'\'m smashing open my piggy bank on the same day!'),
(99, 'The beach was crowded with snow leopards.'),
(100, 'In that instant, everything changed.'),
(101, 'Sometimes, all you need to do is completely make an ass of yourself and laugh it off to realise that life isn\'\'t so bad after all.'),
(102, 'Grape jelly was leaking out the hole in the roof.'),
(103, 'Not all people who wander are lost.'),
(104, 'The sunblock was handed to the girl before practice, but the burned skin was proof she did not apply it.'),
(105, 'The child\'\'s favorite Christmas gift was the large box her father\'\'s lawnmower came in.'),
(106, 'She found his complete dullness interesting.'),
(107, 'She had some amazing news to share but nobody to share it with.'),
(108, 'He went on a whiskey diet and immediately lost three days.'),
(109, 'He shaved the peach to prove a point.'),
(110, 'After coating myself in vegetable oil I found my success rate skyrocketed.'),
(111, 'Everyone was busy, so I went to the movie alone.'),
(112, 'I caught my squirrel rustling through my gym bag.'),
(113, 'I\'\'m confused: when people ask me what\'\'s up, and I point, they groan.'),
(114, 'He wasn\'\'t bitter that she had moved on but from the radish.'),
(115, 'The underground bunker was filled with chips and candy.'),
(116, 'They\'\'re playing the piano while flying in the plane.'),
(117, 'He told us a very exciting adventure story.'),
(118, 'In hopes of finding out the truth, he entered the one-room library.'),
(119, 'Harrold felt confident that nobody would ever suspect his spy pigeon.'),
(120, 'The wake behind the boat told of the past while the open sea for told life in the unknown future.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `id_idioma` int(11) NOT NULL,
  `codigo_idioma` varchar(2) NOT NULL,
  `nombre_idioma` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`id_idioma`, `codigo_idioma`, `nombre_idioma`) VALUES
(1, 'DE', 'Alemán'),
(2, 'BG', 'Búlgaro'),
(3, 'CS', 'Checo'),
(4, 'DA', 'Danés'),
(5, 'SK', 'Eslovaco'),
(6, 'SL', 'Esloveno'),
(7, 'ES', 'Español'),
(8, 'ET', 'Estonio'),
(9, 'FI', 'Finés'),
(10, 'FR', 'Francés'),
(11, 'EL', 'Griego'),
(12, 'HU', 'Húngaro'),
(13, 'ID', 'Indonesio'),
(14, 'EN', 'Inglés'),
(15, 'IT', 'Italiano'),
(16, 'JA', 'Japonés'),
(17, 'LV', 'Letón'),
(18, 'LT', 'Lituano'),
(19, 'NL', 'Neerlandés'),
(20, 'PL', 'Polaco'),
(21, 'PT', 'Portugués'),
(22, 'RO', 'Rumano'),
(23, 'RU', 'Ruso'),
(24, 'SV', 'Sueco'),
(25, 'TR', 'Turco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuaciones`
--

CREATE TABLE `puntuaciones` (
  `id_partida` int(11) NOT NULL,
  `nombre_usuario` varchar(20) DEFAULT NULL,
  `puntuacion_final` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntuaciones`
--

INSERT INTO `puntuaciones` (`id_partida`, `nombre_usuario`, `puntuacion_final`) VALUES
(1, 'Superman', 100),
(2, 'Inframan', 101),
(3, 'Polnareff', 135),
(4, 'Drinking bird', 149),
(5, 'Soy admin', 500),
(6, 'rfds', 0),
(7, 'gfd', 0),
(8, 'fds', 0),
(9, 'Rubén', 6809),
(10, 'rgtfdes', 0),
(11, 'hfg', 0),
(12, 'hgfv', 0),
(13, 'gfvcdx', 0),
(14, 'fggfgfg', 2690),
(15, 'fggf', 0),
(16, 'rtdf', 0),
(17, 'ujhyk', 0),
(18, 'rdfs', 0),
(19, 'hgyfd', 0),
(20, 'tfd', 0),
(21, '', 0),
(22, 'fd', 0),
(23, 'fds', 0),
(24, 'defs', 0),
(25, 'fdszx', 0),
(26, 'peee', 0),
(27, 'dfs', 0),
(28, 'dfsz', 0),
(29, 'fgds', 5239),
(30, '', 0),
(31, 'hgfd', 0),
(32, 'cosa', 0),
(33, 'fpf', 5919),
(34, 'gfds', 0),
(35, 'cosa', 0),
(36, 'ytrgfd', 72874);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `frases`
--
ALTER TABLE `frases`
  ADD PRIMARY KEY (`id_frase`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`id_idioma`);

--
-- Indices de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  ADD PRIMARY KEY (`id_partida`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `frases`
--
ALTER TABLE `frases`
  MODIFY `id_frase` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `id_idioma` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `puntuaciones`
--
ALTER TABLE `puntuaciones`
  MODIFY `id_partida` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
