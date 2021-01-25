import db from "../db.json";
import BoxWidget from "../src/components/boxWidget";
import Footer from "../src/components/footer";
import GitHubCorner from "../src/components/gitHubCorner";
import QuizBackground from "../src/components/quizBackground";
import QuizLogo from "../src/components/quizLogo";
import QuizContainer from "../src/components/quizContainer";
import Header from "../src/components/header";

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Header title={db.title} description={db.description} image={db.bg} />
      <QuizContainer>
        <QuizLogo />
        <BoxWidget>
          <BoxWidget.Header>
            <h1>{db.title}</h1>
          </BoxWidget.Header>
          <BoxWidget.Content>
            <p>{db.description}</p>
          </BoxWidget.Content>
        </BoxWidget>
        <BoxWidget>
          <BoxWidget.Content>
            <h1>Quizes da Galera</h1>
            <p>Adicionar aqui os sites..</p>
          </BoxWidget.Content>
        </BoxWidget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/vitoramerico/alura-quiz" />
    </QuizBackground>
  );
}
