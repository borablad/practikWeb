using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication6
{
    public partial class FormEditWorker : Form
    {
        public FormEditWorker()
        {
            InitializeComponent();
        }

        private void FormEditWorker_Load(object sender, EventArgs e)
        {
            textBox1.Focus();
        }
    }
}
