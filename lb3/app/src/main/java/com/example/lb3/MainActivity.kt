package com.example.lb3

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private val cart = mutableListOf<String>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnLaptop = findViewById<Button>(R.id.btnLaptop)
        val btnMouse = findViewById<Button>(R.id.btnMouse)
        val btnKeyboard = findViewById<Button>(R.id.btnKeyboard)
        val btnRemove = findViewById<Button>(R.id.btnRemove)
        val btnOrder = findViewById<Button>(R.id.btnOrder)
        val txtCart = findViewById<TextView>(R.id.txtCart)

        fun updateCart() {
            txtCart.text = if (cart.isEmpty()) {
                "Кошик порожній"
            } else {
                cart.joinToString("\n")
            }
        }

        btnLaptop.setOnClickListener {
            cart.add("Ноутбук - 30000 грн")
            updateCart()
        }

        btnMouse.setOnClickListener {
            cart.add("Миша - 1000 грн")
            updateCart()
        }

        btnKeyboard.setOnClickListener {
            cart.add("Клавіатура - 2000 грн")
            updateCart()
        }

        btnRemove.setOnClickListener {
            cart.clear()
            updateCart()
        }

        btnOrder.setOnClickListener {
            if (cart.isEmpty()) {
                Toast.makeText(this, "Кошик порожній", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(this, "Замовлення оформлено!", Toast.LENGTH_SHORT).show()
                cart.clear()
                updateCart()
            }
        }
    }
}