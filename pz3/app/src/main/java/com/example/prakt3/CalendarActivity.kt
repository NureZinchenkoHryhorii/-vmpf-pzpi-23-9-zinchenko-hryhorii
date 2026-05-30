package com.example.prakt3

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun CalendarScreen() {

    var date by remember { mutableStateOf("") }
    var event by remember { mutableStateOf("") }

    val events = remember { mutableStateListOf<String>() }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {

        Text("Календар подій")

        Spacer(modifier = Modifier.height(16.dp))

        OutlinedTextField(
            value = date,
            onValueChange = { date = it },
            label = { Text("Дата") }
        )

        Spacer(modifier = Modifier.height(8.dp))

        OutlinedTextField(
            value = event,
            onValueChange = { event = it },
            label = { Text("Подія") }
        )

        Spacer(modifier = Modifier.height(16.dp))

        Button(onClick = {
            if (date.isNotEmpty() && event.isNotEmpty()) {
                events.add("$date - $event")
                event = ""
            }
        }) {
            Text("Додати подію")
        }

        Spacer(modifier = Modifier.height(16.dp))

        Text("Список подій:")

        LazyColumn {
            items(events) { item ->
                Text(item)
            }
        }
    }
}