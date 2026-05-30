package com.example.prakt3

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            SumScreen()
        }
    }
}

@Composable
fun SumScreen() {
    var firstNumber by remember { mutableStateOf("") }
    var secondNumber by remember { mutableStateOf("") }
    var result by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp)
    ) {
        Text("Обчислення суми двох чисел")

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = firstNumber,
            onValueChange = { firstNumber = it },
            label = { Text("Перше число") }
        )

        Spacer(modifier = Modifier.height(8.dp))

        OutlinedTextField(
            value = secondNumber,
            onValueChange = { secondNumber = it },
            label = { Text("Друге число") }
        )

        Spacer(modifier = Modifier.height(16.dp))

        Button(onClick = {
            val num1 = firstNumber.toDoubleOrNull() ?: 0.0
            val num2 = secondNumber.toDoubleOrNull() ?: 0.0
            result = "Сума: ${num1 + num2}"
        }) {
            Text("Обчислити")
        }

        Spacer(modifier = Modifier.height(16.dp))

        Text(result)
    }
}