<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    // Endereço de email para receber as mensagens
    $destinatario = "incubadora.palmas@ifpr.edu.br";
    
    // Assunto do email
    $assunto = "Nova mensagem de contato de " . $nome;
    
    // Corpo do email
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Mensagem:\n$mensagem";
    
    // Headers do email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    
    // Enviar email
    if (mail($destinatario, $assunto, $corpo, $headers)) {
        // Também salvar em arquivo como backup
        $dados = "Nome: $nome\nEmail: $email\nMensagem: $mensagem\n\n";
        file_put_contents('contatos.txt', $dados, FILE_APPEND | LOCK_EX);
        
        echo "<h1>Obrigado, $nome!</h1>";
        echo "<p>Sua mensagem foi recebida e será respondida em breve.</p>";
        echo "<a href='index.php'>Voltar</a>";
    } else {
        echo "<h1>Erro ao enviar mensagem</h1>";
        echo "<p>Ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde.</p>";
        echo "<a href='index.php'>Voltar</a>";
    }
} else {
    echo "<p>Método não permitido.</p>";
}
?>

