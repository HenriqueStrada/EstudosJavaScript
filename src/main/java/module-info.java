module com.example.estudos_javascript {
    requires javafx.controls;
    requires javafx.fxml;
            
                            
    opens com.example.estudos_javascript to javafx.fxml;
    exports com.example.estudos_javascript;
}